import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/savjuf6vg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="savjuf6vg"/>`,
		"fallback": "glyphs:tree",
	});
}

export default Component;
