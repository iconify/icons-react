import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oui1n645i.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oui1n645i"/>`,
		"fallback": "fa6-brands:themeco",
	});
}

export default Component;
