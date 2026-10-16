import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl-hvjv-v.css';
import '../../css/s/sp04sxb-l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl-hvjv-v"/><path class="sp04sxb-l"/>`,
		"fallback": "energy-icons:kerbside-charger-20-bold",
	});
}

export default Component;
