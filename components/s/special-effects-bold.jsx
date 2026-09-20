import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzjp4tb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qzjp4tb3i"/>`,
		"fallback": "solar:special-effects-bold",
	});
}

export default Component;
