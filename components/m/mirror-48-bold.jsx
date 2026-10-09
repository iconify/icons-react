import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqn0hza6d.css';
import '../../css/h/htwye9bzz.css';
import '../../css/r/rk7gs_b9h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqn0hza6d"/><path class="htwye9bzz"/><path class="rk7gs_b9h"/>`,
		"fallback": "energy-icons:mirror-48-bold",
	});
}

export default Component;
