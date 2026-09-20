import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpz6ftb2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpz6ftb2r"/>`,
		"fallback": "selfhst:microsoft-onenote-2018-light",
	});
}

export default Component;
