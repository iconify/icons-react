import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdgkpzv5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zdgkpzv5f"/>`,
		"fallback": "nrk:squares-2x2",
	});
}

export default Component;
