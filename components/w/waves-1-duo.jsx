import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s66mxdb3y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s66mxdb3y"/>`,
		"fallback": "glyphs:waves-1-duo",
	});
}

export default Component;
