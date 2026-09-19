import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtdb2rb_j.css';
import '../../css/d/dmcux5bwl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="dtdb2rb_j"/><path class="dmcux5bwl"/>`,
		"fallback": "garden:mobile-phone-fill-16",
	});
}

export default Component;
