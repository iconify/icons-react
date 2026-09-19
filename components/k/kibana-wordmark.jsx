import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpg-z8mwx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpg-z8mwx"/>`,
		"fallback": "devicon-plain:kibana-wordmark",
	});
}

export default Component;
