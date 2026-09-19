import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh6ex02dp.css';
import '../../css/o/opkm_bb8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh6ex02dp"/><path class="opkm_bb8c"/>`,
		"fallback": "ion:mic-outline",
	});
}

export default Component;
