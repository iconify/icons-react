import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se7ex_ekk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se7ex_ekk"/>`,
		"fallback": "hugeicons:pilcrow",
	});
}

export default Component;
