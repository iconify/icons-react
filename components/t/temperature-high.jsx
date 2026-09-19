import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of7srkb5k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of7srkb5k"/>`,
		"fallback": "fa-solid:temperature-high",
	});
}

export default Component;
