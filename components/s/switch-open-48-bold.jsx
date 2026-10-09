import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o246vub3p.css';
import '../../css/c/cce0_8bwo.css';
import '../../css/z/zslb9qq5n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o246vub3p"/><path class="cce0_8bwo"/><path class="zslb9qq5n"/>`,
		"fallback": "energy-icons:switch-open-48-bold",
	});
}

export default Component;
