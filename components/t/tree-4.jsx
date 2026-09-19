import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzcm5lbgi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzcm5lbgi"/>`,
		"fallback": "glyphs:tree-4",
	});
}

export default Component;
