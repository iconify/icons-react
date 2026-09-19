import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7tf-eb_i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7tf-eb_i"/>`,
		"fallback": "glyphs:view-collapse",
	});
}

export default Component;
