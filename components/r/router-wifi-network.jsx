import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6cyzej7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6cyzej7p"/>`,
		"fallback": "streamline-sharp:router-wifi-network",
	});
}

export default Component;
