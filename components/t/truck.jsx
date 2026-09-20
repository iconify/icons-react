import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xddum3b-a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xddum3b-a"/>`,
		"fallback": "temaki:truck",
	});
}

export default Component;
