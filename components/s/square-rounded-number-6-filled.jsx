import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc0uoabuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc0uoabuh"/>`,
		"fallback": "tabler:square-rounded-number-6-filled",
	});
}

export default Component;
