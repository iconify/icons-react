import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axuv2sb-a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axuv2sb-a"/>`,
		"fallback": "ion:play-circle-sharp",
	});
}

export default Component;
