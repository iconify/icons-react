import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm03u66vf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zm03u66vf"/>`,
		"fallback": "streamline-sharp:spiral-shape-remix",
	});
}

export default Component;
