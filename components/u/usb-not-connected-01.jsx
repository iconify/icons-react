import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n48hqvbia.css';
import '../../css/f/f9t7w0heh.css';
import '../../css/q/qo505gp0f.css';
import '../../css/g/gvzsngngi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n48hqvbia"/><path class="f9t7w0heh"/><path class="qo505gp0f"/><path class="gvzsngngi"/></g>`,
		"fallback": "hugeicons:usb-not-connected-01",
	});
}

export default Component;
