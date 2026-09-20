import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq8qgzcnq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kq8qgzcnq"/>`,
		"fallback": "streamline-plump:sail-ship-remix",
	});
}

export default Component;
