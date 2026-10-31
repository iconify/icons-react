import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r0ey916np.css';
import '../../css/s/sjh--5b7e.css';
import '../../css/g/gpw91obrn.css';
import '../../css/f/f3ydy3l6p.css';
import '../../css/v/vgsxhnmjv.css';
import '../../css/n/nwncifbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="r0ey916np"/><path class="sjh--5b7e wm-shine"/><path class="gpw91obrn wm-k"/><path class="f3ydy3l6p wm-a"/><path class="vgsxhnmjv wm-s"/><path class="nwncifbvd wm-deco"/></g>`,
		"fallback": "withicons-kawaii:unplug",
	});
}

export default Component;
