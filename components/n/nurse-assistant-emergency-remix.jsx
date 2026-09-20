import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wap2w4btr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wap2w4btr"/>`,
		"fallback": "streamline:nurse-assistant-emergency-remix",
	});
}

export default Component;
