import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2s38yz9p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2s38yz9p"/>`,
		"fallback": "glyphs-poly:six",
	});
}

export default Component;
