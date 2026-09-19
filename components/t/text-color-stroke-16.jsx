import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3hqbzbrl.css';
import '../../css/g/ge50lacpt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3hqbzbrl"/><path class="ge50lacpt"/>`,
		"fallback": "garden:text-color-stroke-16",
	});
}

export default Component;
