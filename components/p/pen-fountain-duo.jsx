import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbgb-f08m.css';
import '../../css/t/tk6_7_b3w.css';
import '../../css/s/s2cet7bec.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qbgb-f08m"/><path clip-rule="evenodd" class="tk6_7_b3w"/><path class="s2cet7bec"/></g>`,
		"fallback": "glyphs:pen-fountain-duo",
	});
}

export default Component;
