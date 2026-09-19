import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkcvembuk.css';
import '../../css/a/au89ljb1r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkcvembuk"/><path class="au89ljb1r"/>`,
		"fallback": "fxemoji:stormcloud",
	});
}

export default Component;
