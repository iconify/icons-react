import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ea4hxx_we.css';
import '../../css/u/un3--tbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ea4hxx_we"/><path class="un3--tbeh"/></g>`,
		"fallback": "keyline-icons:mail-dot-sharp-fill",
	});
}

export default Component;
