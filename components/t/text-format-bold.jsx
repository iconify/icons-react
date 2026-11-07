import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkqq6fire.css';
import '../../css/u/ulrix6h0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lkqq6fire"/><path class="ulrix6h0r"/>`,
		"fallback": "solar:text-format-bold",
	});
}

export default Component;
