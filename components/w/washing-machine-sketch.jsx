import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b7ss4s--r.css';
import '../../css/o/osmt2wiov.css';
import '../../css/c/ca9g4jbzr.css';
import '../../css/o/ofl-evjxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b7ss4s--r"/><path class="osmt2wiov wm-k"/><path class="ca9g4jbzr wm-k"/><path class="ofl-evjxh wm-a"/></g>`,
		"fallback": "withicons:washing-machine-sketch",
	});
}

export default Component;
