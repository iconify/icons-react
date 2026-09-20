import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7pma5bsm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7pma5bsm"/>`,
		"fallback": "pinhead:person-wearing-helmet-paddling-kayak-on-water",
	});
}

export default Component;
