import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgpnhbugr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgpnhbugr"/>`,
		"fallback": "ri:progress-5-fill",
	});
}

export default Component;
