import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx_4fpbja.css';

const viewBox = {"width":15,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx_4fpbja"/>`,
		"fallback": "fontisto:test-bottle",
	});
}

export default Component;
