import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxz2cui4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oxz2cui4x"/>`,
		"fallback": "token:starknet",
	});
}

export default Component;
