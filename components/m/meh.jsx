import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/y/yoskqcbdm.css';
import '../../css/j/jt6io-b3f.css';
import '../../css/i/i_bd-bc3e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am770-rkn"/><path class="yoskqcbdm"/><circle class="jt6io-b3f"/><circle class="i_bd-bc3e"/></g>`,
		"fallback": "glyphs-poly:meh",
	});
}

export default Component;
