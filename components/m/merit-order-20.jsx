import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km2fl-ght.css';
import '../../css/v/vurhcwkho.css';
import '../../css/r/rkgzl8y0y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km2fl-ght"/><path class="vurhcwkho"/><path class="rkgzl8y0y"/>`,
		"fallback": "energy-icons:merit-order-20",
	});
}

export default Component;
