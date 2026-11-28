import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b39hs-f5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b39hs-f5x"/>`,
		"fallback": "noviair:theater-masks",
	});
}

export default Component;
