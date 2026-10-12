import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6sb2hngk.css';
import '../../css/h/hvcttkn8s.css';
import '../../css/q/qtozcib7o.css';
import '../../css/w/wyzn1emnh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6sb2hngk"/><path class="hvcttkn8s"/><path class="qtozcib7o"/><path class="wyzn1emnh"/>`,
		"fallback": "energy-icons:valve-wheel-20",
	});
}

export default Component;
