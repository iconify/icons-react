import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b83_sskxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b83_sskxf"/>`,
		"fallback": "typcn:media-play-outline",
	});
}

export default Component;
