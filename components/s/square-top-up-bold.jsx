import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw3onyotj.css';
import '../../css/z/zfllz3bry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw3onyotj"/><path class="zfllz3bry"/>`,
		"fallback": "solar:square-top-up-bold",
	});
}

export default Component;
