import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-8kcn42z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-8kcn42z"/>`,
		"fallback": "glyphs:u-outline",
	});
}

export default Component;
