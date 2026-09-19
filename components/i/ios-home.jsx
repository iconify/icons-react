import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etxzxd_fz.css';
import '../../css/e/ezvo8ibdq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etxzxd_fz"/><path class="ezvo8ibdq"/>`,
		"fallback": "ion:ios-home",
	});
}

export default Component;
