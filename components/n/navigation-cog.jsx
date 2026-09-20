import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai9nbibbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai9nbibbh"/>`,
		"fallback": "tabler:navigation-cog",
	});
}

export default Component;
