import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5jr0cbxf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5jr0cbxf"/>`,
		"fallback": "la:shopware",
	});
}

export default Component;
