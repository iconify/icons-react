import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmq5sba2v.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmq5sba2v"/>`,
		"fallback": "fa6-brands:square-dribbble",
	});
}

export default Component;
