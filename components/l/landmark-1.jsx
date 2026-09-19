import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkmf4y6fo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkmf4y6fo"/>`,
		"fallback": "glyphs:landmark-1",
	});
}

export default Component;
