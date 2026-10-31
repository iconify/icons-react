import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvvzo3brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvvzo3brk"/>`,
		"fallback": "coolicons:panel-left-close-round",
	});
}

export default Component;
