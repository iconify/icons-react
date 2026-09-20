import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iil-_0epu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iil-_0epu"/>`,
		"fallback": "streamline:interface-page-controller-scroll-left-righ-move-scroll-horizontal",
	});
}

export default Component;
