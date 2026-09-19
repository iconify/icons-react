import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bliqavuzu.css';
import '../../css/u/uk1d9ew2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="bliqavuzu"/><path class="uk1d9ew2p"/>`,
		"fallback": "boxicons:pin-filled",
	});
}

export default Component;
