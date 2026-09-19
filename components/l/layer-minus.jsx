import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc9dwfbws.css';
import '../../css/h/hj974yb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc9dwfbws"/><path class="hj974yb2u"/>`,
		"fallback": "bx:layer-minus",
	});
}

export default Component;
