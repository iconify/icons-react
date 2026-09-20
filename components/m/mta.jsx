import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uym1rkb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uym1rkb1g"/>`,
		"fallback": "thesvg-color:mta",
	});
}

export default Component;
