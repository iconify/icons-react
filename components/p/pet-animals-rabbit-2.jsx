import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l30q0vbgb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l30q0vbgb"/>`,
		"fallback": "streamline-pixel:pet-animals-rabbit-2",
	});
}

export default Component;
