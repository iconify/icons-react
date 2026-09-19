import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xcmf1ib7l.css';
import '../../css/x/x6wn_zblt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xcmf1ib7l"/><path class="x6wn_zblt"/></g>`,
		"fallback": "fluent-emoji-flat:ticket",
	});
}

export default Component;
