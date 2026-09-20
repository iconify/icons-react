import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekj4x8z7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekj4x8z7u"/>`,
		"fallback": "tabler:pencil-pin",
	});
}

export default Component;
