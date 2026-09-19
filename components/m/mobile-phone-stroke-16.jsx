import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtdb2rb_j.css';
import '../../css/x/xg2k39d9n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="dtdb2rb_j"/><path class="xg2k39d9n"/>`,
		"fallback": "garden:mobile-phone-stroke-16",
	});
}

export default Component;
