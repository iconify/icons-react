import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvzi4p1_l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvzi4p1_l"/>`,
		"fallback": "pinhead:manhole-cover-with-droplet",
	});
}

export default Component;
