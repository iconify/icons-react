import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or8-05bqx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or8-05bqx"/>`,
		"fallback": "glyphs:q-duo",
	});
}

export default Component;
