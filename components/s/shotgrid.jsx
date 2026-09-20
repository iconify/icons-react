import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otlbybqix.css';
import '../../css/n/nbsc69_8a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="otlbybqix"/><path class="nbsc69_8a"/>`,
		"fallback": "thesvg-color:shotgrid",
	});
}

export default Component;
