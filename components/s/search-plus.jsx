import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fabh_rbkv.css';
import '../../css/g/gh1c2r79w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fabh_rbkv"/><path class="gh1c2r79w"/>`,
		"fallback": "vaadin:search-plus",
	});
}

export default Component;
