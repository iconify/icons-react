import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma981cbxo.css';

const viewBox = {"width":2016,"height":2176};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma981cbxo"/>`,
		"fallback": "vs:shield-times",
	});
}

export default Component;
