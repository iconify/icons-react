import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8j-mf_mt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8j-mf_mt"/>`,
		"fallback": "devicon-plain:pixijs-wordmark",
	});
}

export default Component;
