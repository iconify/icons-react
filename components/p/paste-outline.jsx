import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5z7n2dg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ft5z7n2dg"/>`,
		"fallback": "glyphs:paste-outline",
	});
}

export default Component;
