import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6cquxbzw.css';
import '../../css/e/e235zrwks.css';
import '../../css/q/qttw1t02n.css';
import '../../css/s/sj71gtfbi.css';
import '../../css/h/hcp1fm8yx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w6cquxbzw"/><path class="e235zrwks"/><path class="qttw1t02n"/><path class="sj71gtfbi"/><path class="hcp1fm8yx"/></g>`,
		"fallback": "streamline-color:square-clock",
	});
}

export default Component;
