import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfhguzbcb.css';
import '../../css/f/f_mc5ezfi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfhguzbcb"/><path class="f_mc5ezfi"/>`,
		"fallback": "material-icon-theme:sway",
	});
}

export default Component;
