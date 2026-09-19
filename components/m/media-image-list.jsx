import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/ro-_17b1w.css';
import '../../css/d/dc95v3gtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ro-_17b1w"/><path class="dc95v3gtj"/></g>`,
		"fallback": "iconoir:media-image-list",
	});
}

export default Component;
