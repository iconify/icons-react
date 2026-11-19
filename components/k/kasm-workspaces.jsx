import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_brs7b8y.css';
import '../../css/k/kp9boybhz.css';
import '../../css/k/kkq-gbbrk.css';
import '../../css/n/n4g147c-z.css';
import '../../css/x/x58ehmgkv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_brs7b8y"/><path class="kp9boybhz"/><path class="kkq-gbbrk"/><path class="n4g147c-z"/><path class="x58ehmgkv"/>`,
		"fallback": "selfhst:kasm-workspaces",
	});
}

export default Component;
