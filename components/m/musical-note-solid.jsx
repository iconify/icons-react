import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n970xwb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n970xwb0d"/>`,
		"fallback": "heroicons:musical-note-solid",
	});
}

export default Component;
