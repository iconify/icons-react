import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0e93lbtk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0e93lbtk"/>`,
		"fallback": "devicon:reactnative-wordmark",
	});
}

export default Component;
