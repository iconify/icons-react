import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bri9ce21d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bri9ce21d"/>`,
		"fallback": "tabler:taiwan-dollar",
	});
}

export default Component;
