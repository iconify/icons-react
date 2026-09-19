import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feplapb-m.css';
import '../../css/a/afrri1boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feplapb-m"/><path class="afrri1boo"/>`,
		"fallback": "boxicons:select-none",
	});
}

export default Component;
