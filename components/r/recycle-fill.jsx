import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkb28cc2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkb28cc2m"/>`,
		"fallback": "ri:recycle-fill",
	});
}

export default Component;
