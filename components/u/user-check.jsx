import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjk-647jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjk-647jr"/>`,
		"fallback": "vadivam:user-check",
	});
}

export default Component;
