import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc7j49bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qc7j49bqo"/>`,
		"fallback": "nrk:magazine-solid-expressive",
	});
}

export default Component;
