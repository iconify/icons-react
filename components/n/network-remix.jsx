import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irg5m57an.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="irg5m57an"/>`,
		"fallback": "streamline-flex:network-remix",
	});
}

export default Component;
