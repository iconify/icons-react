import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcvni4bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcvni4bdw"/>`,
		"fallback": "mdi:palm-tree",
	});
}

export default Component;
