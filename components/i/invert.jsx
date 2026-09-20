import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntpbjnfmw.css';
import '../../css/y/y8ecny4xo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntpbjnfmw"/><path class="y8ecny4xo"/>`,
		"fallback": "oui:invert",
	});
}

export default Component;
