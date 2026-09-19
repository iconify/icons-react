import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugxnffayd.css';
import '../../css/k/k7iordhaa.css';
import '../../css/w/wytvb7b8k.css';
import '../../css/j/jmcf7tb5i.css';
import '../../css/t/tevqq6bvl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugxnffayd"/><path class="k7iordhaa"/><path class="wytvb7b8k"/><path class="jmcf7tb5i"/><path class="tevqq6bvl"/>`,
		"fallback": "fxemoji:oden",
	});
}

export default Component;
