import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyqxlj5tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyqxlj5tj"/>`,
		"fallback": "noviair:sidebar",
	});
}

export default Component;
