import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5j847bee.css';
import '../../css/p/pr4dqmbxn.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5j847bee"/><path class="pr4dqmbxn"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:server-check-20",
	});
}

export default Component;
