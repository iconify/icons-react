import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7ap2g0om.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c7ap2g0om"/>`,
		"fallback": "glyphs:phone-add-outline",
	});
}

export default Component;
