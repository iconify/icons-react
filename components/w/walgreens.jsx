import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llx_gbc1j.css';

const viewBox = {"width":335.72,"height":217.4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llx_gbc1j"/>`,
		"fallback": "thesvg-color:walgreens",
	});
}

export default Component;
