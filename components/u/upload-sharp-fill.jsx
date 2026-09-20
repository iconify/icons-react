import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apgp81bsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apgp81bsp"/>`,
		"fallback": "keyline-icons:upload-sharp-fill",
	});
}

export default Component;
