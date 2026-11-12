import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgsu639mr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgsu639mr"/>`,
		"fallback": "tabler:link-down",
	});
}

export default Component;
