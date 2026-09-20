import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-kg16b2g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-kg16b2g"/>`,
		"fallback": "pinhead:lowrise-apartment-building-on-ground",
	});
}

export default Component;
