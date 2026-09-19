import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr5ehxn3t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr5ehxn3t"/>`,
		"fallback": "glyphs:waves-duo",
	});
}

export default Component;
