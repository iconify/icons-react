import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-iu0r2yz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f-iu0r2yz"/>`,
		"fallback": "glyphs:picnic-table-bold",
	});
}

export default Component;
