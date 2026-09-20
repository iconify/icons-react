import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2k1m9bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l2k1m9bxu"/>`,
		"fallback": "token:nmr",
	});
}

export default Component;
