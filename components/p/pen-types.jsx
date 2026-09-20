import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn1c_rh4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn1c_rh4h"/>`,
		"fallback": "streamline-sharp:pen-types",
	});
}

export default Component;
