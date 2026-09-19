import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j8y588b4d.css';
import '../../css/h/h17v5_bhk.css';
import '../../css/v/v9k9l7b1b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="j8y588b4d"/><path class="h17v5_bhk"/><path class="v9k9l7b1b"/></g>`,
		"fallback": "glyphs-poly:light-switch",
	});
}

export default Component;
