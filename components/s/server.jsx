import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/las96bcjw.css';
import '../../css/v/vz7_ibceo.css';
import '../../css/g/g2ncvrepr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="las96bcjw"/><rect class="vz7_ibceo"/><path class="g2ncvrepr"/></g>`,
		"fallback": "lucide:server",
	});
}

export default Component;
