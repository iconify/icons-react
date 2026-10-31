import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqd9lfbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqd9lfbsz"/>`,
		"fallback": "coolicons:washing-machine-fill-round",
	});
}

export default Component;
