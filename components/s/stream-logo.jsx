import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rqivp4cfs.css';
import '../../css/e/es5xyc2-s.css';
import '../../css/r/rmmkg2n0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="rqivp4cfs"/><path class="es5xyc2-s"/><path class="rmmkg2n0j"/></g>`,
		"fallback": "streamline-logos:stream-logo",
	});
}

export default Component;
