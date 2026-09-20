import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd0vk9vgc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pd0vk9vgc"/>`,
		"fallback": "streamline-plump:recycle-bin-solid",
	});
}

export default Component;
