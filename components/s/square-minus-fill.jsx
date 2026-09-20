import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3nzar_kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k3nzar_kn"/>`,
		"fallback": "keyline-icons:square-minus-fill",
	});
}

export default Component;
