import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x270g9bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x270g9bed"/>`,
		"fallback": "tabler:square-letter-c-filled",
	});
}

export default Component;
