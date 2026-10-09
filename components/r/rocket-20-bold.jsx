import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv46repqa.css';
import '../../css/r/ra5u6pzcj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv46repqa"/><path class="ra5u6pzcj"/>`,
		"fallback": "energy-icons:rocket-20-bold",
	});
}

export default Component;
