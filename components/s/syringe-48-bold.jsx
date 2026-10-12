import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr5ofoi5l.css';
import '../../css/u/u0d4ys4cz.css';
import '../../css/g/goaubd3xt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr5ofoi5l"/><path class="u0d4ys4cz"/><path class="goaubd3xt"/>`,
		"fallback": "energy-icons:syringe-48-bold",
	});
}

export default Component;
