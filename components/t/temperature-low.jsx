import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhb9lzbvj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhb9lzbvj"/>`,
		"fallback": "fa-solid:temperature-low",
	});
}

export default Component;
