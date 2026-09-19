import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qclasgpbs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qclasgpbs"/>`,
		"fallback": "glyphs:pause-circle-bold",
	});
}

export default Component;
