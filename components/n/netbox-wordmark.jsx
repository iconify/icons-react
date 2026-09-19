import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4b5m0bco.css';
import '../../css/s/svf4jc_ce.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4b5m0bco"/><path class="svf4jc_ce"/>`,
		"fallback": "devicon:netbox-wordmark",
	});
}

export default Component;
