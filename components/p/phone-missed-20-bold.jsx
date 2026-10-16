import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozbstuboh.css';
import '../../css/u/u3e4gfbli.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozbstuboh"/><path class="u3e4gfbli"/>`,
		"fallback": "energy-icons:phone-missed-20-bold",
	});
}

export default Component;
