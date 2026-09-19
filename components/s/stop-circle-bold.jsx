import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4m2zw2yc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z4m2zw2yc"/>`,
		"fallback": "glyphs:stop-circle-bold",
	});
}

export default Component;
