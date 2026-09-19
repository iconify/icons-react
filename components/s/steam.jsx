import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lve74zb5j.css';
import '../../css/u/upwrz4bah.css';
import '../../css/k/kaojb14_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lve74zb5j"/><path class="upwrz4bah"/><path class="kaojb14_w"/>`,
		"fallback": "bxl:steam",
	});
}

export default Component;
