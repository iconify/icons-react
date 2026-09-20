import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj16trbni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj16trbni"/>`,
		"fallback": "selfhst:spendspentspent",
	});
}

export default Component;
