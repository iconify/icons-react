import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbpt-4e8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kbpt-4e8d"/>`,
		"fallback": "streamline-plump:location-pin-3-remix",
	});
}

export default Component;
