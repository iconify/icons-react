import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv_c0-59u.css';
import '../../css/w/whz7b1b5h.css';
import '../../css/m/m4ht6ksod.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv_c0-59u"/><path class="whz7b1b5h"/><path class="m4ht6ksod"/>`,
		"fallback": "selfhst:ksuite-kchat-light",
	});
}

export default Component;
