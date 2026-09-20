import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pehz1ac8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pehz1ac8m"/>`,
		"fallback": "typcn:media-rewind",
	});
}

export default Component;
