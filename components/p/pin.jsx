import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmci-86nt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmci-86nt"/>`,
		"fallback": "icon-park-outline:pin",
	});
}

export default Component;
