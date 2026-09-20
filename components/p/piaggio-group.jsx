import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn36lpbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn36lpbmx"/>`,
		"fallback": "thesvg:piaggio-group",
	});
}

export default Component;
