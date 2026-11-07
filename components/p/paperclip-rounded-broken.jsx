import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbj6x5byz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbj6x5byz"/>`,
		"fallback": "solar:paperclip-rounded-broken",
	});
}

export default Component;
