import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rop6in0iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rop6in0iw"/>`,
		"fallback": "si:user-alt-3-fill",
	});
}

export default Component;
