import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abxsb9t-e.css';
import '../../css/g/gj1ihwbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abxsb9t-e"/><path clip-rule="evenodd" class="gj1ihwbcf"/>`,
		"fallback": "mingcute:user-visible-fill",
	});
}

export default Component;
