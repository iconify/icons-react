import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzdq8un1s.css';
import '../../css/m/mrfw0_bvm.css';
import '../../css/x/xoph-9b8t.css';

const viewBox = {"width":160,"height":145};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qzdq8un1s"/><path class="mrfw0_bvm"/><path class="xoph-9b8t"/></g>`,
		"fallback": "thesvg-color:sure",
	});
}

export default Component;
