import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwsr2acmx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwsr2acmx"/>`,
		"fallback": "devicon-plain:networkx-wordmark",
	});
}

export default Component;
