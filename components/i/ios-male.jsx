import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl6dnvbar.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl6dnvbar"/>`,
		"fallback": "ion:ios-male",
	});
}

export default Component;
