import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhe9yd_sc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhe9yd_sc"/>`,
		"fallback": "ix:leaf",
	});
}

export default Component;
