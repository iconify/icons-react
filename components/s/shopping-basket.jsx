import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw5lexb-j.css';
import '../../css/y/y4rdwmmfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw5lexb-j"/><path class="y4rdwmmfi"/>`,
		"fallback": "circum:shopping-basket",
	});
}

export default Component;
