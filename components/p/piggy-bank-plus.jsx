import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m733kd0tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m733kd0tf"/>`,
		"fallback": "noviair-light:piggy-bank-plus",
	});
}

export default Component;
