import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te1hwkbud.css';
import '../../css/b/bkh5a45lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te1hwkbud"/><path class="bkh5a45lp"/>`,
		"fallback": "boxicons:psychology-filled",
	});
}

export default Component;
