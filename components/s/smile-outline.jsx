import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vkiwvd2vg.css';
import '../../css/z/z99nws9nc.css';
import '../../css/h/hikk7hbhy.css';
import '../../css/y/yw_ha830o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vkiwvd2vg"/><path clip-rule="evenodd" class="z99nws9nc"/><path class="hikk7hbhy"/><path clip-rule="evenodd" class="yw_ha830o"/></g>`,
		"fallback": "glyphs:smile-outline",
	});
}

export default Component;
