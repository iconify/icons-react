import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9l_web1w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9l_web1w"/>`,
		"fallback": "glyphs:person",
	});
}

export default Component;
