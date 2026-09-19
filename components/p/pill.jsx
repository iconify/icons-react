import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxf3oibnk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cxf3oibnk"/>`,
		"fallback": "pepicons:pill",
	});
}

export default Component;
