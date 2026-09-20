import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qti7m7xie.css';
import '../../css/s/sokztlbsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qti7m7xie"/><path class="sokztlbsw"/></g>`,
		"fallback": "keyline-icons:printer-sharp-two-tone",
	});
}

export default Component;
