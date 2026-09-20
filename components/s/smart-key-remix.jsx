import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzjc2bc_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fzjc2bc_y"/>`,
		"fallback": "streamline-sharp:smart-key-remix",
	});
}

export default Component;
