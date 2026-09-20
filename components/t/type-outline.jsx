import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lup9ydbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lup9ydbmr"/>`,
		"fallback": "keyline-icons:type-outline",
	});
}

export default Component;
