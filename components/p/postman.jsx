import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5pe20bzg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5pe20bzg"/>`,
		"fallback": "cib:postman",
	});
}

export default Component;
