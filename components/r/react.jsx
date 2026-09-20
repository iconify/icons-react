import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3iboo12o.css';
import '../../css/n/n0ta28bqr.css';
import '../../css/k/k45m38b3b.css';
import '../../css/z/za00otbmy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3iboo12o"/><path class="n0ta28bqr"/><path class="k45m38b3b"/><path class="za00otbmy"/>`,
		"fallback": "material-icon-theme:react",
	});
}

export default Component;
