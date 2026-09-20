import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zig9k8bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zig9k8bwe"/>`,
		"fallback": "ri:search-ai-4-fill",
	});
}

export default Component;
