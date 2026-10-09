import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3p0zqbmw.css';
import '../../css/b/bl9mhqw5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3p0zqbmw"/><path class="bl9mhqw5o"/>`,
		"fallback": "energy-icons:pool-48-bold",
	});
}

export default Component;
