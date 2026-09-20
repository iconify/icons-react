import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyb_2jbqc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyb_2jbqc"/>`,
		"fallback": "la:sim-card-solid",
	});
}

export default Component;
