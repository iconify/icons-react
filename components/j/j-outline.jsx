import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukp4s0b3a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukp4s0b3a"/>`,
		"fallback": "glyphs:j-outline",
	});
}

export default Component;
