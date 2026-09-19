import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceb8-npdd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceb8-npdd"/>`,
		"fallback": "devicon-plain:turbo-wordmark",
	});
}

export default Component;
