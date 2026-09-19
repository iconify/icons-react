import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeis-6bnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeis-6bnf"/>`,
		"fallback": "icon-park-outline:plus",
	});
}

export default Component;
