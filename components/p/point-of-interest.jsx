import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrut08e3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrut08e3a"/>`,
		"fallback": "typcn:point-of-interest",
	});
}

export default Component;
