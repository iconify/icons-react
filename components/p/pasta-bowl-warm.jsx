import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxxgrebhp.css';
import '../../css/w/w315qtb4v.css';
import '../../css/e/eufxlac6z.css';
import '../../css/m/mxv__tb1o.css';
import '../../css/l/li99fb7xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hxxgrebhp"/><path class="w315qtb4v"/><path class="eufxlac6z"/><path class="mxv__tb1o"/><path class="li99fb7xq"/></g>`,
		"fallback": "streamline-ultimate-color:pasta-bowl-warm",
	});
}

export default Component;
