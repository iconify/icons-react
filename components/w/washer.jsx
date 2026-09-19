import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8ox0hr5w.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8ox0hr5w"/>`,
		"fallback": "whh:washer",
	});
}

export default Component;
