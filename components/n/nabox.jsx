import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgyn-qbco.css';
import '../../css/i/i700k7_wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgyn-qbco"/><path clip-rule="evenodd" class="i700k7_wg"/>`,
		"fallback": "token:nabox",
	});
}

export default Component;
