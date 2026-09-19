import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neukm1fuz.css';
import '../../css/k/kr2jicboj.css';
import '../../css/b/bhbvqjyxk.css';
import '../../css/p/pc0px5b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="neukm1fuz"/><rect class="kr2jicboj"/><rect class="bhbvqjyxk"/><path class="pc0px5b8z"/>`,
		"fallback": "boxicons:qr-filled",
	});
}

export default Component;
