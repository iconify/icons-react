import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hb7nrobwg.css';
import '../../css/o/o_r27487m.css';
import '../../css/q/q--r32voc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hb7nrobwg"/><rect class="o_r27487m"/><path class="q--r32voc"/></g>`,
		"fallback": "streamline:interface-edit-copy-clipboard-copy-cut-paste",
	});
}

export default Component;
