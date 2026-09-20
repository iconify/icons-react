import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss_jp_aav.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss_jp_aav"/>`,
		"fallback": "streamline-color:underline-text-1",
	});
}

export default Component;
