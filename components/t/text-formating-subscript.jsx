import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifu7oub2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ifu7oub2g"/>`,
		"fallback": "streamline-freehand:text-formating-subscript",
	});
}

export default Component;
