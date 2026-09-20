import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/reku4gu6n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="reku4gu6n"/>`,
		"fallback": "streamline:travel-hotel-laundry-basket-bathroom-laundry-bin-basket",
	});
}

export default Component;
