import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rstupirhr.css';
import '../../css/m/mfuq2zbnj.css';
import '../../css/g/gle5llb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rstupirhr"/><path class="mfuq2zbnj wm-shadow"/><path class="gle5llb7u"/></g>`,
		"fallback": "withicons:music-note-engrave",
	});
}

export default Component;
