import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyl-rkbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyl-rkbss"/>`,
		"fallback": "reicon:text3",
	});
}

export default Component;
