import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyhh9xlgt.css';
import '../../css/m/mgwjp-z-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyhh9xlgt"/><path class="mgwjp-z-z"/>`,
		"fallback": "eva:trash-2-outline",
	});
}

export default Component;
