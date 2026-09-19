import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwwq-4bef.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwwq-4bef"/>`,
		"fallback": "glyphs:waves-1",
	});
}

export default Component;
