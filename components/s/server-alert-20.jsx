import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5j847bee.css';
import '../../css/p/pr4dqmbxn.css';
import '../../css/n/n_d0zwbem.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5j847bee"/><path class="pr4dqmbxn"/><path class="n_d0zwbem"/>`,
		"fallback": "energy-icons:server-alert-20",
	});
}

export default Component;
