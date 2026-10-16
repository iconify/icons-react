import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ymvib9npc.css';
import '../../css/z/z--bb-fpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ymvib9npc"/><path class="z--bb-fpw"/></g>`,
		"fallback": "andrsrxn:straighten-vertical",
	});
}

export default Component;
