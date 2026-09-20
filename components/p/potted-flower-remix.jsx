import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umuzeub6j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="umuzeub6j"/>`,
		"fallback": "streamline-plump:potted-flower-remix",
	});
}

export default Component;
