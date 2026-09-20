import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfcz1lb7w.css';
import '../../css/t/tigdgqbwo.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfcz1lb7w"/><path class="tigdgqbwo"/>`,
		"fallback": "lineicons:travel",
	});
}

export default Component;
