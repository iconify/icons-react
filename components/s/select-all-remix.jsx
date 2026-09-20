import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_f_i1b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j_f_i1b1v"/>`,
		"fallback": "streamline-sharp:select-all-remix",
	});
}

export default Component;
