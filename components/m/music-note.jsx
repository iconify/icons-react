import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sivfj3bof.css';
import '../../css/r/rb5emwb6v.css';
import '../../css/g/gle5llb7u.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sivfj3bof"/><path class="rb5emwb6v wm-shine"/><path class="gle5llb7u"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:music-note",
	});
}

export default Component;
