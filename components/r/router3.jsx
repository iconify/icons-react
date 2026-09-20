import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/neop_nbqw.css';
import '../../css/p/p73s4r25r.css';
import '../../css/q/qnr3hlb8p.css';
import '../../css/p/px3zg-5hv.css';
import '../../css/g/gcpb48j5i.css';
import '../../css/c/cuok1jiok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="neop_nbqw"/><path clip-rule="evenodd" class="p73s4r25r"/><path class="qnr3hlb8p"/><path clip-rule="evenodd" class="px3zg-5hv"/><path class="gcpb48j5i"/><path class="cuok1jiok"/></g>`,
		"fallback": "reicon:router3",
	});
}

export default Component;
