import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrrsmlbdl.css';
import '../../css/o/ow0kcdcgg.css';
import '../../css/p/p_c34mhur.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrrsmlbdl"/><path class="ow0kcdcgg"/><path class="p_c34mhur"/>`,
		"fallback": "carbon:time-plot",
	});
}

export default Component;
