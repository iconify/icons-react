import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paea7wd2m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paea7wd2m"/>`,
		"fallback": "glyphs:seven-outline",
	});
}

export default Component;
