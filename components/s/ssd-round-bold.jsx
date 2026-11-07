import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7w7r-bld.css';
import '../../css/d/dcs6u0bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7w7r-bld"/><path clip-rule="evenodd" class="dcs6u0bix"/>`,
		"fallback": "solar:ssd-round-bold",
	});
}

export default Component;
