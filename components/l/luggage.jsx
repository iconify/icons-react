import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pog0yuliw.css';
import '../../css/j/jrdtkbbqb.css';
import '../../css/p/pr4hfob0i.css';
import '../../css/n/ndggxmqsd.css';
import '../../css/b/b572__8fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="pog0yuliw"/><path class="jrdtkbbqb wm-shine"/><path class="pr4hfob0i wm-k"/><path class="ndggxmqsd wm-a"/><path class="b572__8fz wm-deco"/></g>`,
		"fallback": "withicons-kawaii:luggage",
	});
}

export default Component;
