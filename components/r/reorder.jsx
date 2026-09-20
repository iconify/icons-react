import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz6ij1bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz6ij1bvl"/>`,
		"fallback": "nrk:reorder",
	});
}

export default Component;
