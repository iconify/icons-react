import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8rv91b6b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8rv91b6b"/>`,
		"fallback": "streamline-pixel:user-gender-lesbian",
	});
}

export default Component;
