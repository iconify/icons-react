import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdu_b2b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdu_b2b2s"/>`,
		"fallback": "boxicons:play-circle-filled",
	});
}

export default Component;
