import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nozoseb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nozoseb2t"/>`,
		"fallback": "mynaui:trees-solid",
	});
}

export default Component;
