import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rem_-jbue.css';

const viewBox = {"width":29,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rem_-jbue"/>`,
		"fallback": "fontisto:right-align",
	});
}

export default Component;
