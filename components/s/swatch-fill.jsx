import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl2xf4b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zl2xf4b2p"/>`,
		"fallback": "si:swatch-fill",
	});
}

export default Component;
