import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4gessbux.css';

const viewBox = {"width":7,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4gessbux"/>`,
		"fallback": "formkit:left",
	});
}

export default Component;
