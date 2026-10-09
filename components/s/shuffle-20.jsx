import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfhe1nbee.css';
import '../../css/v/vli-k3xmw.css';
import '../../css/l/lgsu85z6r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfhe1nbee"/><path class="vli-k3xmw"/><path class="lgsu85z6r"/>`,
		"fallback": "energy-icons:shuffle-20",
	});
}

export default Component;
