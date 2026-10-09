import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0dvj9g4i.css';
import '../../css/i/i2a3t5bgb.css';
import '../../css/t/tg1ou3w9r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0dvj9g4i"/><path class="i2a3t5bgb"/><path class="tg1ou3w9r"/>`,
		"fallback": "energy-icons:socket-48",
	});
}

export default Component;
