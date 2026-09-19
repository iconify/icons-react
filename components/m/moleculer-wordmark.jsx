import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0x0msb5n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0x0msb5n"/>`,
		"fallback": "devicon:moleculer-wordmark",
	});
}

export default Component;
