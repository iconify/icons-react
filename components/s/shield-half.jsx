import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulvpn3bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulvpn3bcp"/>`,
		"fallback": "vadivam:shield-half",
	});
}

export default Component;
