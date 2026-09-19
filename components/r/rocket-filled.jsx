import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w26gjsv3k.css';
import '../../css/j/jxs7zfb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w26gjsv3k"/><path class="jxs7zfb_x"/>`,
		"fallback": "bitcoin-icons:rocket-filled",
	});
}

export default Component;
