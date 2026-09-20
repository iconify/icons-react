import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m11cagbqy.css';
import '../../css/t/tjmji5h6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m11cagbqy"/><path class="tjmji5h6m"/>`,
		"fallback": "selfhst:swagger",
	});
}

export default Component;
