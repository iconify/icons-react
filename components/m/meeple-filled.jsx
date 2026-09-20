import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljcwlzb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljcwlzb_h"/>`,
		"fallback": "tabler:meeple-filled",
	});
}

export default Component;
