import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1nk26b6c.css';

const viewBox = {"width":1536,"height":1344};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1nk26b6c"/>`,
		"fallback": "vs:spinner",
	});
}

export default Component;
