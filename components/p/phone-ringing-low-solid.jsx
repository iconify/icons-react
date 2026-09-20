import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit0tnbsg.css';
import '../../css/m/mhcm32iad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hit0tnbsg"/><path class="mhcm32iad"/>`,
		"fallback": "pixel:phone-ringing-low-solid",
	});
}

export default Component;
