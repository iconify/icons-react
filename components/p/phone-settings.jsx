import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfddwd_7g.css';
import '../../css/j/j0j3yqboy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfddwd_7g"/><path class="j0j3yqboy"/>`,
		"fallback": "carbon:phone-settings",
	});
}

export default Component;
