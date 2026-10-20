import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdiyli40o.css';
import '../../css/p/pc-bfqbig.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdiyli40o"/><path class="pc-bfqbig"/>`,
		"fallback": "energy-icons:line-height-48-bold",
	});
}

export default Component;
