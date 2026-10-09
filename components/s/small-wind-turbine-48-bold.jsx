import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2ejnib6s.css';
import '../../css/l/lmq15twty.css';
import '../../css/r/r2nbzfjyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2ejnib6s"/><path class="lmq15twty"/><path class="r2nbzfjyr"/>`,
		"fallback": "energy-icons:small-wind-turbine-48-bold",
	});
}

export default Component;
