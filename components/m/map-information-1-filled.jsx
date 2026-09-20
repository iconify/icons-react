import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw--zdb9h.css';
import '../../css/k/k5i8z-b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw--zdb9h"/><path class="k5i8z-b_k"/>`,
		"fallback": "tdesign:map-information-1-filled",
	});
}

export default Component;
