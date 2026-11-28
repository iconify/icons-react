import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz12o2b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz12o2b7m"/>`,
		"fallback": "noviair-light:island",
	});
}

export default Component;
