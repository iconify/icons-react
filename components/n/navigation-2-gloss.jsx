import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh4-wacdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh4-wacdu"/>`,
		"fallback": "withicons:navigation-2-gloss",
	});
}

export default Component;
