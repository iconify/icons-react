import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw5t0sbxt.css';
import '../../css/h/hlbfg1dop.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw5t0sbxt"/><path class="hlbfg1dop"/>`,
		"fallback": "energy-icons:tag-48-bold",
	});
}

export default Component;
