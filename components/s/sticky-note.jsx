import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq-c0rbrg.css';

const viewBox = {"width":1664,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq-c0rbrg"/>`,
		"fallback": "vs:sticky-note",
	});
}

export default Component;
