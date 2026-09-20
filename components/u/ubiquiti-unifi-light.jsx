import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awm_sxbcl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awm_sxbcl"/>`,
		"fallback": "selfhst:ubiquiti-unifi-light",
	});
}

export default Component;
