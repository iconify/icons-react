import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qal-z721q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qal-z721q"/>`,
		"fallback": "glyphs:pen-1",
	});
}

export default Component;
