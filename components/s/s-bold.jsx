import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x24r8mbcq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x24r8mbcq"/>`,
		"fallback": "glyphs:s-bold",
	});
}

export default Component;
