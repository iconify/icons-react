import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4lu07s0y.css';
import '../../css/l/l_8wx2fdq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4lu07s0y"/><path class="l_8wx2fdq"/>`,
		"fallback": "energy-icons:oil-48",
	});
}

export default Component;
