import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi6pzub_r.css';
import '../../css/s/sqglgeskz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi6pzub_r"/><path class="sqglgeskz"/>`,
		"fallback": "streamline-pixel:real-estate-building-house",
	});
}

export default Component;
