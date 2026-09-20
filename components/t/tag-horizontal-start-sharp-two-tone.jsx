import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/alk7dvb9p.css';
import '../../css/g/gfnhmpggj.css';
import '../../css/m/mabku0myx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="alk7dvb9p"/><path class="gfnhmpggj"/><path class="mabku0myx"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-start-sharp-two-tone",
	});
}

export default Component;
