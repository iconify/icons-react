import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiq-kp2it.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiq-kp2it"/>`,
		"fallback": "devicon-plain:postgis-wordmark",
	});
}

export default Component;
