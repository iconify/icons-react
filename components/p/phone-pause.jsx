import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls9cc-bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls9cc-bhg"/>`,
		"fallback": "tabler:phone-pause",
	});
}

export default Component;
