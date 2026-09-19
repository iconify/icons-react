import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hel45b33c.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hel45b33c"/>`,
		"fallback": "fa6-solid:stapler",
	});
}

export default Component;
