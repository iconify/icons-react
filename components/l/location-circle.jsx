import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x84wkm2wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x84wkm2wk"/>`,
		"fallback": "mdi:location-circle",
	});
}

export default Component;
