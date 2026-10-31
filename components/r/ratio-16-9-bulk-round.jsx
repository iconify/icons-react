import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f932xy51a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f932xy51a"/>`,
		"fallback": "coolicons:ratio-16-9-bulk-round",
	});
}

export default Component;
