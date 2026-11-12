import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_v0fg13q.css';
import '../../css/i/ipzupvdvg.css';
import '../../css/n/nn1z1nbac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_v0fg13q"/><path class="ipzupvdvg"/><path class="nn1z1nbac"/>`,
		"fallback": "selfhst:ksuite-calendar-light",
	});
}

export default Component;
