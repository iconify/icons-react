import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j791lm_cr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j791lm_cr"/>`,
		"fallback": "la:map-signs-solid",
	});
}

export default Component;
