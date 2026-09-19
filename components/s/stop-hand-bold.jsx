import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx7u_3bsv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xx7u_3bsv"/>`,
		"fallback": "glyphs:stop-hand-bold",
	});
}

export default Component;
