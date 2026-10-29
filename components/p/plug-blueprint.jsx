import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sla7xkb_i.css';
import '../../css/d/d8t5hybly.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/l/l8mo16qch.css';
import '../../css/c/cgczxwbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sla7xkb_i wm-deco"/><path class="d8t5hybly wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="l8mo16qch wm-k"/><path class="cgczxwbbg wm-a"/></g>`,
		"fallback": "withicons:plug-blueprint",
	});
}

export default Component;
