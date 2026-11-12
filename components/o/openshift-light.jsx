import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdt13xckt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdt13xckt"/>`,
		"fallback": "selfhst:openshift-light",
	});
}

export default Component;
