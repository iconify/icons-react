import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxvxe8b2t.css';
import '../../css/q/qybors25i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxvxe8b2t"/><path class="qybors25i"/>`,
		"fallback": "selfhst:toodoom-light",
	});
}

export default Component;
