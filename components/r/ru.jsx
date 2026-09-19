import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_fejtbws.css';
import '../../css/l/li_ihxg7s.css';
import '../../css/j/js52zubsw.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_fejtbws"/><path class="li_ihxg7s"/><path class="js52zubsw"/></g>`,
		"fallback": "cif:ru",
	});
}

export default Component;
