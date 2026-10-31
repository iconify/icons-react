import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/n7hf31buy.css';
import '../../css/d/da0v6yu7c.css';
import '../../css/g/gmjd0tb9a.css';
import '../../css/d/ddal_tbtn.css';
import '../../css/j/jxlyp1b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="n7hf31buy"/><path class="da0v6yu7c"/><path class="gmjd0tb9a wm-shine"/><path class="ddal_tbtn wm-k"/><path class="jxlyp1b3g wm-a"/></g>`,
		"fallback": "withicons-kawaii:piano",
	});
}

export default Component;
