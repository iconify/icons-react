import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcf2c5nxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcf2c5nxc"/>`,
		"fallback": "tabler:layout-navbar-filled",
	});
}

export default Component;
