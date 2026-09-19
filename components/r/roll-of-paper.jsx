import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ky9ep5ygo.css';
import '../../css/q/q8dg84_vw.css';
import '../../css/q/qpvumgbpy.css';
import '../../css/l/lbhwhxbsh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ky9ep5ygo"/><path class="q8dg84_vw"/><path class="qpvumgbpy"/><path class="lbhwhxbsh"/></g>`,
		"fallback": "fluent-emoji-flat:roll-of-paper",
	});
}

export default Component;
