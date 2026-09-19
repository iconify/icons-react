import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oil4e9epc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="oil4e9epc"/>`,
		"fallback": "glyphs-poly:stop",
	});
}

export default Component;
