import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbbc_v-5y.css';
import '../../css/v/vvfyzqbfn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbbc_v-5y"/><path class="vvfyzqbfn"/>`,
		"fallback": "ooui:log-out-rtl",
	});
}

export default Component;
