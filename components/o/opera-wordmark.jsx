import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urc4_cblc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urc4_cblc"/>`,
		"fallback": "devicon-plain:opera-wordmark",
	});
}

export default Component;
