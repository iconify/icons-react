import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quacllbqi.css';
import '../../css/c/cily1qbfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quacllbqi"/><path class="cily1qbfw"/>`,
		"fallback": "ion:md-thumbs-up",
	});
}

export default Component;
