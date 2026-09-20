import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdd_mkcjl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gdd_mkcjl"/>`,
		"fallback": "streamline:vpn-connection-solid",
	});
}

export default Component;
