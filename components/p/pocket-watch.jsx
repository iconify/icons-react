import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btm2enb5m.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btm2enb5m"/>`,
		"fallback": "jam:pocket-watch",
	});
}

export default Component;
