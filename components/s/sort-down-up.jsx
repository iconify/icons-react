import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbocu9bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bbocu9bpg"/>`,
		"fallback": "reicon:sort-down-up",
	});
}

export default Component;
