import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_scynb5a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_scynb5a"/>`,
		"fallback": "devicon:render-wordmark",
	});
}

export default Component;
