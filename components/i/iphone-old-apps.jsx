import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx-7y4g4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yx-7y4g4j"/>`,
		"fallback": "majesticons:iphone-old-apps",
	});
}

export default Component;
