import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1v8i60eu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1v8i60eu"/>`,
		"fallback": "glyphs:pin-1",
	});
}

export default Component;
