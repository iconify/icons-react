import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxbx25zyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxbx25zyp"/>`,
		"fallback": "subway:sms-8",
	});
}

export default Component;
