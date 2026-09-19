import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz6l9nihz.css';

const viewBox = {"width":304,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz6l9nihz"/>`,
		"fallback": "zmdi:smartphone-download",
	});
}

export default Component;
