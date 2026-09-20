import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vho_s5bgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vho_s5bgy"/>`,
		"fallback": "streamline-ultimate:share-location-hand-bold",
	});
}

export default Component;
