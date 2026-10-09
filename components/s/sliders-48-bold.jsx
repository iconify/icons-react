import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cja52ub9p.css';
import '../../css/x/xe9zg8buj.css';
import '../../css/k/ka2xwu2vh.css';
import '../../css/z/zbzgx-vnx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cja52ub9p"/><path class="xe9zg8buj"/><path class="ka2xwu2vh"/><path class="zbzgx-vnx"/>`,
		"fallback": "energy-icons:sliders-48-bold",
	});
}

export default Component;
