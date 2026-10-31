import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o41h1_56k.css';
import '../../css/e/ezb3ff6ma.css';
import '../../css/a/a3b2f1bep.css';
import '../../css/v/vf4v90byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="o41h1_56k"/><path class="ezb3ff6ma wm-k"/><path class="a3b2f1bep wm-a"/><path class="vf4v90byg wm-deco"/></g>`,
		"fallback": "withicons-kawaii:list-music",
	});
}

export default Component;
