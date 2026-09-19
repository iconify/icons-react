import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocmpgtb3x.css';
import '../../css/j/j0rk_8u7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocmpgtb3x"/><path class="j0rk_8u7w"/>`,
		"fallback": "fontisto:universal-acces",
	});
}

export default Component;
