import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw53gmb6r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sw53gmb6r"/>`,
		"fallback": "streamline-plump:vpn-connection-solid",
	});
}

export default Component;
