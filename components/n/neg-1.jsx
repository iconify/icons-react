import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss2t-obao.css';

const viewBox = {"width":320,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss2t-obao"/>`,
		"fallback": "zmdi:neg-1",
	});
}

export default Component;
