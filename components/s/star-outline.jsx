import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_qy5_tac.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b_qy5_tac"/>`,
		"fallback": "glyphs:star-outline",
	});
}

export default Component;
