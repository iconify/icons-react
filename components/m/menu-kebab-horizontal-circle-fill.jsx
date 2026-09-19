import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1pa7kbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c1pa7kbvm"/>`,
		"fallback": "iconamoon:menu-kebab-horizontal-circle-fill",
	});
}

export default Component;
