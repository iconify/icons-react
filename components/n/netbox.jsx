import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmu1e4ohr.css';
import '../../css/d/drunhgb2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmu1e4ohr"/><path class="drunhgb2r"/>`,
		"fallback": "selfhst:netbox",
	});
}

export default Component;
