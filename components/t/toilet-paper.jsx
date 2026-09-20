import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/hywotzbeb.css';
import '../../css/f/fcr_xdb0v.css';
import '../../css/f/f9ou04b4c.css';
import '../../css/x/x3l725b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="hywotzbeb"/><path class="fcr_xdb0v"/><path class="f9ou04b4c"/><path class="x3l725b2z"/></g>`,
		"fallback": "streamline-sharp-color:toilet-paper",
	});
}

export default Component;
