import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1_jmk1cr.css';
import '../../css/f/f3kmjcc1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w1_jmk1cr"/><path class="f3kmjcc1w"/>`,
		"fallback": "uim:toggle-on",
	});
}

export default Component;
