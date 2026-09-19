import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iowo5oevp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iowo5oevp"/>`,
		"fallback": "devicon-plain:rancher-wordmark",
	});
}

export default Component;
