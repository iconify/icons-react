import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nojv07bhd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nojv07bhd"/>`,
		"fallback": "streamline-plump:usb-port-solid",
	});
}

export default Component;
