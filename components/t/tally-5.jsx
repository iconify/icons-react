import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_jn8tb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_jn8tb_r"/>`,
		"fallback": "hugeicons:tally-5",
	});
}

export default Component;
