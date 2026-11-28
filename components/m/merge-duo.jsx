import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/puewagr1r.css';
import '../../css/f/f5liuu3rw.css';
import '../../css/x/xoel-jbtk.css';
import '../../css/p/ptxdeh5wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="puewagr1r"/><path class="f5liuu3rw"/><path class="xoel-jbtk"/><path class="ptxdeh5wn"/></g>`,
		"fallback": "iconaut:merge-duo",
	});
}

export default Component;
