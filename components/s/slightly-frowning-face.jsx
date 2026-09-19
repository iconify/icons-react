import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy37ombvw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy37ombvw"/>`,
		"fallback": "dinkie-icons:slightly-frowning-face",
	});
}

export default Component;
