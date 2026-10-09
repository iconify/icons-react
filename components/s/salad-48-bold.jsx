import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tudb-7bht.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tudb-7bht"/>`,
		"fallback": "energy-icons:salad-48-bold",
	});
}

export default Component;
