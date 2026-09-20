import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufp82bbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufp82bbuy"/>`,
		"fallback": "tabler:rotate-clockwise",
	});
}

export default Component;
