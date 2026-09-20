import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzz8phbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzz8phbch"/>`,
		"fallback": "ri:microsoft-loop-line",
	});
}

export default Component;
