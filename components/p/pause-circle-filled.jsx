import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twidg77uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twidg77uf"/>`,
		"fallback": "boxicons:pause-circle-filled",
	});
}

export default Component;
