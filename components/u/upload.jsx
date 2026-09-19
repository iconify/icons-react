import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3xqbrbhu.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3xqbrbhu"/>`,
		"fallback": "zmdi:upload",
	});
}

export default Component;
