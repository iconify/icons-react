import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyzjvpbjy.css';
import '../../css/h/hqcji4bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jyzjvpbjy"/><path class="hqcji4bcg"/>`,
		"fallback": "mingcute:magic-3-fill",
	});
}

export default Component;
