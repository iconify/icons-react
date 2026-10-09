import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu29sma9m.css';
import '../../css/y/y8de8nbur.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu29sma9m"/><path class="y8de8nbur"/>`,
		"fallback": "energy-icons:share-2-20",
	});
}

export default Component;
