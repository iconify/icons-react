import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcupe_3ix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcupe_3ix"/>`,
		"fallback": "ri:replay-10-fill",
	});
}

export default Component;
