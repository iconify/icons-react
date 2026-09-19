import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/runyxf3yg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="runyxf3yg"/>`,
		"fallback": "hugeicons:more",
	});
}

export default Component;
