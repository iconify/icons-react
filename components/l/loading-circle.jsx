import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mthucvbid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mthucvbid"/>`,
		"fallback": "streamline-plump:loading-circle",
	});
}

export default Component;
