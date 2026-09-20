import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w97ft0xpq.css';
import '../../css/h/hn37esb2k.css';
import '../../css/p/pb8rmtbxv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w97ft0xpq"/><path class="hn37esb2k"/><path class="pb8rmtbxv"/>`,
		"fallback": "selfhst:ksuite-manager-dark",
	});
}

export default Component;
