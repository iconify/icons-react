import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qre9t1brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qre9t1brz"/>`,
		"fallback": "griddy-icons:wallet-filled",
	});
}

export default Component;
