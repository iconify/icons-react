import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etaycyb8r.css';
import '../../css/y/yd56p_bqg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etaycyb8r"/><circle class="yd56p_bqg"/>`,
		"fallback": "foundation:paw",
	});
}

export default Component;
