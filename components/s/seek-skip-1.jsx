import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kan0722wu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kan0722wu"/>`,
		"fallback": "glyphs:seek-skip-1",
	});
}

export default Component;
