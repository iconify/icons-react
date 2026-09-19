import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl0xw-snl.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl0xw-snl"/>`,
		"fallback": "fa6-solid:store",
	});
}

export default Component;
