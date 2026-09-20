import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egd6s5b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egd6s5b0c"/>`,
		"fallback": "proicons:music-note-2",
	});
}

export default Component;
