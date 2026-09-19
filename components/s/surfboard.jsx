import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d16w73vpt.css';
import '../../css/x/x4l5kzafr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d16w73vpt"/><path class="x4l5kzafr"/></g>`,
		"fallback": "hugeicons:surfboard",
	});
}

export default Component;
