import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvnfzn9zr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lvnfzn9zr"/>`,
		"fallback": "token:optopia",
	});
}

export default Component;
