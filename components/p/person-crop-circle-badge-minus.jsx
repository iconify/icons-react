import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gavx18bjj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gavx18bjj"/>`,
		"fallback": "f7:person-crop-circle-badge-minus",
	});
}

export default Component;
