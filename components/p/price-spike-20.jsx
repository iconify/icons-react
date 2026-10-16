import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km2fl-ght.css';
import '../../css/x/x61bnzbhu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km2fl-ght"/><path class="x61bnzbhu"/>`,
		"fallback": "energy-icons:price-spike-20",
	});
}

export default Component;
