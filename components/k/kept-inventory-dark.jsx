import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfeohs2bk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfeohs2bk"/>`,
		"fallback": "selfhst:kept-inventory-dark",
	});
}

export default Component;
