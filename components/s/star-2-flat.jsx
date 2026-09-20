import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b38rg11dk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b38rg11dk"/>`,
		"fallback": "streamline-sharp-color:star-2-flat",
	});
}

export default Component;
