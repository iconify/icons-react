import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsw87bb9d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dsw87bb9d"/>`,
		"fallback": "streamline-flex:location-heart-pin-remix",
	});
}

export default Component;
