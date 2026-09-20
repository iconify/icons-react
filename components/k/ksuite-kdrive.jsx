import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_kf_eb-t.css';
import '../../css/j/jxu6cf38p.css';
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
		"content": `<path class="e_kf_eb-t"/><path class="jxu6cf38p"/><path class="p34lxkxwh"/><path class="i-gsmlpun"/>`,
		"fallback": "selfhst:ksuite-kdrive",
	});
}

export default Component;
