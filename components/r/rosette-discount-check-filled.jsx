import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl6lmni0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl6lmni0g"/>`,
		"fallback": "tabler:rosette-discount-check-filled",
	});
}

export default Component;
