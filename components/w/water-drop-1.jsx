import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmynu6bpt.css';
import '../../css/c/c8_g7taxa.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmynu6bpt"/><path clip-rule="evenodd" class="c8_g7taxa"/>`,
		"fallback": "lineicons:water-drop-1",
	});
}

export default Component;
