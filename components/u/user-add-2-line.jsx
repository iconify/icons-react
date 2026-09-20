import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hceee5bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hceee5bje"/>`,
		"fallback": "mingcute:user-add-2-line",
	});
}

export default Component;
