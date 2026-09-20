import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omgu7_bgj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omgu7_bgj"/>`,
		"fallback": "selfhst:microsoft-outlook-2000-light",
	});
}

export default Component;
