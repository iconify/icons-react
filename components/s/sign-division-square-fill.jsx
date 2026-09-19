import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcxv81l_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jcxv81l_q"/>`,
		"fallback": "iconamoon:sign-division-square-fill",
	});
}

export default Component;
