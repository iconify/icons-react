import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky9cn3brn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ky9cn3brn"/>`,
		"fallback": "streamline-plump:mouse-wireless-remix",
	});
}

export default Component;
