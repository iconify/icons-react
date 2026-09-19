import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzcly702d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzcly702d"/>`,
		"fallback": "devicon-plain:nats",
	});
}

export default Component;
