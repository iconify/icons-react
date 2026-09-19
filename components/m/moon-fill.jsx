import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd6sy1bzy.css';
import '../../css/o/o65zaeisr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd6sy1bzy"/><path class="o65zaeisr"/>`,
		"fallback": "akar-icons:moon-fill",
	});
}

export default Component;
