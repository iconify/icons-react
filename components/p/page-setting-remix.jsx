import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayp-n_9at.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ayp-n_9at"/>`,
		"fallback": "streamline-flex:page-setting-remix",
	});
}

export default Component;
