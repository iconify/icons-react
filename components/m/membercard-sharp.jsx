import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivr_cpdrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivr_cpdrk"/>`,
		"fallback": "pixelarticons:membercard-sharp",
	});
}

export default Component;
