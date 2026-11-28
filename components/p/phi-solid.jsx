import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjqn1y8dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjqn1y8dg"/>`,
		"fallback": "iconaut:phi-solid",
	});
}

export default Component;
