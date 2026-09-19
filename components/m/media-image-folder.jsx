import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/guf68bb-o.css';
import '../../css/o/o6a29nfjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="guf68bb-o"/><path class="o6a29nfjc"/></g>`,
		"fallback": "iconoir:media-image-folder",
	});
}

export default Component;
