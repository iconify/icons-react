import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j301gnb2g.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j301gnb2g"/>`,
		"fallback": "jam:rss-feed",
	});
}

export default Component;
