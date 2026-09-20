import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixj8ylb2d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ixj8ylb2d"/>`,
		"fallback": "streamline-plump:speaker-2-remix",
	});
}

export default Component;
