import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd_lskbjq.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd_lskbjq"/>`,
		"fallback": "fa6-brands:unity",
	});
}

export default Component;
