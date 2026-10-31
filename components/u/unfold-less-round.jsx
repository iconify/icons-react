import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpks6aclr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpks6aclr"/>`,
		"fallback": "coolicons:unfold-less-round",
	});
}

export default Component;
