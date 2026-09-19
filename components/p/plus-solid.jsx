import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm7t0fbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dm7t0fbjo"/>`,
		"fallback": "heroicons:plus-solid",
	});
}

export default Component;
