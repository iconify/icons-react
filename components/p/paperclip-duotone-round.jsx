import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihk9poypq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihk9poypq"/>`,
		"fallback": "coolicons:paperclip-duotone-round",
	});
}

export default Component;
