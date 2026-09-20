import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1pjk9bxw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1pjk9bxw"/>`,
		"fallback": "la:syringe-solid",
	});
}

export default Component;
