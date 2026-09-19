import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mov5x5atu.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mov5x5atu"/>`,
		"fallback": "fa:phone-square",
	});
}

export default Component;
