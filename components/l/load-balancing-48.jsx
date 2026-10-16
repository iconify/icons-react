import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6a66hhkg.css';
import '../../css/h/h2yezpf2d.css';
import '../../css/e/ev4sdmbvj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6a66hhkg"/><path class="h2yezpf2d"/><path class="ev4sdmbvj"/>`,
		"fallback": "energy-icons:load-balancing-48",
	});
}

export default Component;
