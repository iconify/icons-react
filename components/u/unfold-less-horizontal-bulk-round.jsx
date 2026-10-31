import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a76k91d3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a76k91d3g"/>`,
		"fallback": "coolicons:unfold-less-horizontal-bulk-round",
	});
}

export default Component;
