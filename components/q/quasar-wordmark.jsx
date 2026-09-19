import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mddf--b2d.css';
import '../../css/k/k3s0atbkj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mddf--b2d"/><path class="k3s0atbkj"/>`,
		"fallback": "devicon:quasar-wordmark",
	});
}

export default Component;
