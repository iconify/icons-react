import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv4cxk5nj.css';
import '../../css/k/k09q8my-j.css';
import '../../css/n/nn1z1nbac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv4cxk5nj"/><path class="k09q8my-j"/><path class="nn1z1nbac"/>`,
		"fallback": "selfhst:ksuite-calendar-light",
	});
}

export default Component;
