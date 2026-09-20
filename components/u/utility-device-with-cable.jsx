import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgc11fb9i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgc11fb9i"/>`,
		"fallback": "pinhead:utility-device-with-cable",
	});
}

export default Component;
