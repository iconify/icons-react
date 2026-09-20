import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7u8429br.css';
import '../../css/q/qwf60s-8o.css';
import '../../css/p/phlrdv_7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7u8429br"/><path clip-rule="evenodd" class="qwf60s-8o"/><path class="phlrdv_7q"/>`,
		"fallback": "lineicons:stripe",
	});
}

export default Component;
