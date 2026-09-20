import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8r6-nb4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f8r6-nb4a"/>`,
		"fallback": "streamline-plump:location-heart-pin-solid",
	});
}

export default Component;
