import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfml8eqyk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfml8eqyk"/>`,
		"fallback": "selfhst:wattbox-dark",
	});
}

export default Component;
