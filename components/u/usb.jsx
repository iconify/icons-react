import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmlps6b0t.css';
import '../../css/w/wt0pcikiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmlps6b0t"/><path class="wt0pcikiv"/>`,
		"fallback": "circum:usb",
	});
}

export default Component;
