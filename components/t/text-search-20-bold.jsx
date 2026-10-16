import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/japh1-c2n.css';
import '../../css/q/qhxqg70ep.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="japh1-c2n"/><path class="qhxqg70ep"/>`,
		"fallback": "energy-icons:text-search-20-bold",
	});
}

export default Component;
