import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pogjx1b_n.css';
import '../../css/r/rmwudqohm.css';
import '../../css/w/wtyylsbgk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pogjx1b_n"/><path class="rmwudqohm"/><path class="wtyylsbgk"/></g>`,
		"fallback": "fluent-emoji-flat:mouth",
	});
}

export default Component;
