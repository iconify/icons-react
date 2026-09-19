import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj0_tcbbp.css';
import '../../css/j/jz4jx24-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj0_tcbbp"/><path class="jz4jx24-p"/>`,
		"fallback": "boxicons:scan-filled",
	});
}

export default Component;
