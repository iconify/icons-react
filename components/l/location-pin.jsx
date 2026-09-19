import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orpr6mbrv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orpr6mbrv"/>`,
		"fallback": "entypo:location-pin",
	});
}

export default Component;
