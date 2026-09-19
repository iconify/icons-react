import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrj21gkyf.css';
import '../../css/b/bn2xbcx0y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lrj21gkyf"/><path class="bn2xbcx0y"/></g>`,
		"fallback": "fluent-emoji-flat:vulcan-salute-medium",
	});
}

export default Component;
