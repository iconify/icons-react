import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1t7v_btd.css';
import '../../css/p/pufx9lxgz.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1t7v_btd"/><path class="pufx9lxgz"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:ppa-signed-20-bold",
	});
}

export default Component;
