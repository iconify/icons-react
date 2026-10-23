import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsuwm0btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsuwm0btz"/>`,
		"fallback": "vadivam:package-minus",
	});
}

export default Component;
