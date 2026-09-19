import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smq69y8wv.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smq69y8wv"/>`,
		"fallback": "fa6-solid:shop",
	});
}

export default Component;
