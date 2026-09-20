import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi5-9xmbr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fi5-9xmbr"/>`,
		"fallback": "streamline-flex:map-location-solid",
	});
}

export default Component;
