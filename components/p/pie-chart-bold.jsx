import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqk9_4b2a.css';
import '../../css/r/r-rt-5hka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqk9_4b2a"/><path class="r-rt-5hka"/>`,
		"fallback": "solar:pie-chart-bold",
	});
}

export default Component;
