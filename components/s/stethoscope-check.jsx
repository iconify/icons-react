import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2o77lodb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2o77lodb"/>`,
		"fallback": "noviair-light:stethoscope-check",
	});
}

export default Component;
