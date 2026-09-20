import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dygdx6tfp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dygdx6tfp"/>`,
		"fallback": "ix:screen-pc-tower",
	});
}

export default Component;
