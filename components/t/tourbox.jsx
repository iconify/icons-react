import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sphz-eb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sphz-eb-j"/>`,
		"fallback": "thesvg:tourbox",
	});
}

export default Component;
