import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqgqhc_5n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqgqhc_5n"/>`,
		"fallback": "glyphs:sunny-mostly-bold",
	});
}

export default Component;
