import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8kv1hbar.css';
import '../../css/g/gb_71gb0y.css';
import '../../css/y/yvuobzjdn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8kv1hbar"/><path class="gb_71gb0y"/><path class="yvuobzjdn"/>`,
		"fallback": "energy-icons:thermometer-up-48-bold",
	});
}

export default Component;
