import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m501iv-7c.css';
import '../../css/d/ddz586lyl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m501iv-7c"/><path class="ddz586lyl"/>`,
		"fallback": "selfhst:sponsorblock",
	});
}

export default Component;
