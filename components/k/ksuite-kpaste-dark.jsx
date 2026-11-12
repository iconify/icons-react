import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgnha726h.css';
import '../../css/z/zhef83wqk.css';
import '../../css/z/zuvme35ny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgnha726h"/><path class="zhef83wqk"/><path class="zuvme35ny"/>`,
		"fallback": "selfhst:ksuite-kpaste-dark",
	});
}

export default Component;
