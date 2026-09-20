import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yms-1bcdi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yms-1bcdi"/>`,
		"fallback": "streamline-flex:keyboard-option-setting-gear-remix",
	});
}

export default Component;
