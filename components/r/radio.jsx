import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0_jigb-j.css';
import '../../css/x/xjr5jrboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0_jigb-j"/><path class="xjr5jrboz"/>`,
		"fallback": "boxicons:radio",
	});
}

export default Component;
