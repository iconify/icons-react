import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcwv75bft.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcwv75bft"/>`,
		"fallback": "map:locksmith",
	});
}

export default Component;
