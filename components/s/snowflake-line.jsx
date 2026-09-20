import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj_kz5bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj_kz5bpx"/>`,
		"fallback": "mingcute:snowflake-line",
	});
}

export default Component;
