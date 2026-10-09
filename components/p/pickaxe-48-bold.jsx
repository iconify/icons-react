import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjyqpubda.css';
import '../../css/n/niilcsy8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjyqpubda"/><path class="niilcsy8v"/>`,
		"fallback": "energy-icons:pickaxe-48-bold",
	});
}

export default Component;
