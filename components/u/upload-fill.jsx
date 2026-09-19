import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk1ieab_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rk1ieab_t"/>`,
		"fallback": "iconamoon:upload-fill",
	});
}

export default Component;
