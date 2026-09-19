import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/c/ciudg2vjs.css';
import '../../css/u/ud3m_cc2w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="ciudg2vjs"/><path class="ud3m_cc2w"/></g>`,
		"fallback": "fluent-emoji-flat:star-struck",
	});
}

export default Component;
