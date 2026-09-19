import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mndh_sbaj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mndh_sbaj"/>`,
		"fallback": "carbon:report-chart",
	});
}

export default Component;
