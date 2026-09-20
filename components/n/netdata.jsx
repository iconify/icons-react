import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7s4_sb0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7s4_sb0o"/>`,
		"fallback": "selfhst:netdata",
	});
}

export default Component;
