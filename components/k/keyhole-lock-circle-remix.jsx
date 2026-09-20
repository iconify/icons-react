import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s810sxc2d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s810sxc2d"/>`,
		"fallback": "streamline:keyhole-lock-circle-remix",
	});
}

export default Component;
