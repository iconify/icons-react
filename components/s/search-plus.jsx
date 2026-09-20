import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yahrr0snd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yahrr0snd"/>`,
		"fallback": "majesticons:search-plus",
	});
}

export default Component;
