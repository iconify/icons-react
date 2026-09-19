import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw20a1b0g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw20a1b0g"/>`,
		"fallback": "fa6-solid:phone-volume",
	});
}

export default Component;
