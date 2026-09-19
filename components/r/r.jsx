import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t17rpcbje.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t17rpcbje"/>`,
		"fallback": "glyphs-poly:r",
	});
}

export default Component;
