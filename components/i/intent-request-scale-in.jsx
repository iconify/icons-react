import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gffi6mjqp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gffi6mjqp"/>`,
		"fallback": "carbon:intent-request-scale-in",
	});
}

export default Component;
