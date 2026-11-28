import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a016ilb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a016ilb3l"/>`,
		"fallback": "noviair-light:projector-check",
	});
}

export default Component;
