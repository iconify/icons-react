import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu6zpr5jr.css';
import '../../css/c/czaquksml.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu6zpr5jr"/><path class="czaquksml"/>`,
		"fallback": "ion:receipt-sharp",
	});
}

export default Component;
