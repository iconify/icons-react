import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjiur7b1t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjiur7b1t"/>`,
		"fallback": "fa7-solid:torii-gate",
	});
}

export default Component;
