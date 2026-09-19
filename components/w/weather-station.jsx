import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf38nmbzc.css';
import '../../css/j/j_fgb0h4o.css';
import '../../css/e/e-_ammf2d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf38nmbzc"/><path class="j_fgb0h4o"/><path class="e-_ammf2d"/>`,
		"fallback": "carbon:weather-station",
	});
}

export default Component;
