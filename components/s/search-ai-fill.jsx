import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xylo4ccpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xylo4ccpg"/>`,
		"fallback": "ri:search-ai-fill",
	});
}

export default Component;
