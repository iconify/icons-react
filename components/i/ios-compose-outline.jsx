import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwhq_1bfc.css';
import '../../css/s/s0kb75b8z.css';
import '../../css/z/zyduq6bqi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwhq_1bfc"/><path class="s0kb75b8z"/><path class="zyduq6bqi"/>`,
		"fallback": "ion:ios-compose-outline",
	});
}

export default Component;
