import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1ds8l59c.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1ds8l59c"/>`,
		"fallback": "fa-solid:shopping-bag",
	});
}

export default Component;
