import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrv6k5hte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrv6k5hte"/>`,
		"fallback": "simple-icons:sifive",
	});
}

export default Component;
