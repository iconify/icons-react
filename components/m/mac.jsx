import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-kj-abli.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-kj-abli"/>`,
		"fallback": "ps:mac",
	});
}

export default Component;
