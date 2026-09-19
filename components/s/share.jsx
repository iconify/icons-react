import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc9f2b9-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc9f2b9-t"/>`,
		"fallback": "fa6-solid:share",
	});
}

export default Component;
