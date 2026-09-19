import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncpn4wbbm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncpn4wbbm"/>`,
		"fallback": "file-icons:marko",
	});
}

export default Component;
