import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw4v5acxi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tw4v5acxi"/>`,
		"fallback": "streamline-flex:tiktok-solid",
	});
}

export default Component;
