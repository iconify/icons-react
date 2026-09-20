import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peoa9-bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peoa9-bvx"/>`,
		"fallback": "mdi:tooltip",
	});
}

export default Component;
