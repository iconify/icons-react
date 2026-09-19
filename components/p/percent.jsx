import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/um_jqab8k.css';
import '../../css/s/sn3trm7ug.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="um_jqab8k"/><path class="sn3trm7ug"/></g>`,
		"fallback": "glyphs-poly:percent",
	});
}

export default Component;
