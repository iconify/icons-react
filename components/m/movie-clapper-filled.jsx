import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxzy3ubzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxzy3ubzk"/>`,
		"fallback": "tdesign:movie-clapper-filled",
	});
}

export default Component;
