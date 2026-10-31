import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v2iagtbcw.css';
import '../../css/c/cdq-ahbxh.css';
import '../../css/c/cl4cfkfbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="v2iagtbcw wm-k"/><path class="cdq-ahbxh wm-a"/><path class="cl4cfkfbi wm-deco"/></g>`,
		"fallback": "withicons-kawaii:type",
	});
}

export default Component;
