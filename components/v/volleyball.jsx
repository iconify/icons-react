import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atne-kb1n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atne-kb1n"/>`,
		"fallback": "fa7-solid:volleyball",
	});
}

export default Component;
