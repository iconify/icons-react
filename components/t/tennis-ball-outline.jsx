import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzpg0f4dd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mzpg0f4dd"/>`,
		"fallback": "glyphs:tennis-ball-outline",
	});
}

export default Component;
