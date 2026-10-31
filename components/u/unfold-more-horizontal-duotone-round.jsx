import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p47sj7buw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p47sj7buw"/>`,
		"fallback": "coolicons:unfold-more-horizontal-duotone-round",
	});
}

export default Component;
