import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn7sslbdo.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn7sslbdo"/>`,
		"fallback": "jam:more-horizontal",
	});
}

export default Component;
