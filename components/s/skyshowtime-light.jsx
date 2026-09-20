import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp_59jbzp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp_59jbzp"/>`,
		"fallback": "selfhst:skyshowtime-light",
	});
}

export default Component;
