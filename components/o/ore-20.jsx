import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d44p8wv5z.css';
import '../../css/t/tb4t4kb9t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d44p8wv5z"/><path class="tb4t4kb9t"/>`,
		"fallback": "energy-icons:ore-20",
	});
}

export default Component;
