import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyfh41bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyfh41bfw"/>`,
		"fallback": "coolicons:recycle-duotone-round",
	});
}

export default Component;
