import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk8rsab9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk8rsab9x"/>`,
		"fallback": "mdi:tangram",
	});
}

export default Component;
