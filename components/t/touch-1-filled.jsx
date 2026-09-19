import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq__i_bat.css';
import '../../css/l/lpad86zwt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq__i_bat"/><path class="lpad86zwt"/>`,
		"fallback": "carbon:touch-1-filled",
	});
}

export default Component;
