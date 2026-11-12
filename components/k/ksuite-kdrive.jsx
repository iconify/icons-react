import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm1o5ccoz.css';
import '../../css/o/obkkoglrp.css';
import '../../css/p/p34lxkxwh.css';
import '../../css/i/i-gsmlpun.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm1o5ccoz"/><path class="obkkoglrp"/><path class="p34lxkxwh"/><path class="i-gsmlpun"/>`,
		"fallback": "selfhst:ksuite-kdrive",
	});
}

export default Component;
