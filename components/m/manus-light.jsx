import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pglcr0mfc.css';

const viewBox = {"width":60,"height":60};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pglcr0mfc"/>`,
		"fallback": "thesvg-color:manus-light",
	});
}

export default Component;
