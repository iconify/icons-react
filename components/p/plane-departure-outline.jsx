import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t84lhjjrc.css';
import '../../css/d/dqytc7seb.css';
import '../../css/v/v2crmy61y.css';
import '../../css/g/g2bf17kpl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t84lhjjrc"/><path clip-rule="evenodd" class="dqytc7seb"/><path class="v2crmy61y"/><path clip-rule="evenodd" class="g2bf17kpl"/></g>`,
		"fallback": "glyphs:plane-departure-outline",
	});
}

export default Component;
