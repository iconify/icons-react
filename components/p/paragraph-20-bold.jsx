import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpg9p2bhv.css';
import '../../css/l/l05mycboi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpg9p2bhv"/><path class="l05mycboi"/>`,
		"fallback": "energy-icons:paragraph-20-bold",
	});
}

export default Component;
