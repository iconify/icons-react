import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa8b20bjm.css';
import '../../css/s/s6s6d1bvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa8b20bjm"/><path class="s6s6d1bvf"/>`,
		"fallback": "selfhst:sendgrid-light",
	});
}

export default Component;
