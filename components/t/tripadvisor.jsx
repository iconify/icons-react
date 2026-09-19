import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q29c6fb3t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q29c6fb3t"/>`,
		"fallback": "entypo-social:tripadvisor",
	});
}

export default Component;
