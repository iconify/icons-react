import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esdtsmgwp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esdtsmgwp"/>`,
		"fallback": "f7:wallet",
	});
}

export default Component;
