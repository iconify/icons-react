import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbfmuwa3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cbfmuwa3q"/>`,
		"fallback": "keyline-icons:square-arrow-up-left-fill",
	});
}

export default Component;
