import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g74y0wb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g74y0wb2s"/>`,
		"fallback": "tabler:square-rotated-forbid",
	});
}

export default Component;
