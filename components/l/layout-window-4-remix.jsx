import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8jglacri.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q8jglacri"/>`,
		"fallback": "streamline-plump:layout-window-4-remix",
	});
}

export default Component;
