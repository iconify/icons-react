import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyf7gmbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyf7gmbzr"/>`,
		"fallback": "noviair-light:target",
	});
}

export default Component;
