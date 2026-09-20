import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psv555bke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="psv555bke"/>`,
		"fallback": "streamline-sharp:router-wifi-network-remix",
	});
}

export default Component;
