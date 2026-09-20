import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbf_jdblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jbf_jdblt"/>`,
		"fallback": "solar:key-minimalistic-bold",
	});
}

export default Component;
