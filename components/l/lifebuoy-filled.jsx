import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiq5p1cvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiq5p1cvd"/>`,
		"fallback": "tabler:lifebuoy-filled",
	});
}

export default Component;
