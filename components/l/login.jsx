import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmpf8o31a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmpf8o31a"/>`,
		"fallback": "entypo:login",
	});
}

export default Component;
