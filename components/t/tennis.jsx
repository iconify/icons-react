import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg49_ubgr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg49_ubgr"/>`,
		"fallback": "maki:tennis",
	});
}

export default Component;
