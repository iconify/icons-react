import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw6v8tb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw6v8tb9o"/>`,
		"fallback": "tabler:user-code",
	});
}

export default Component;
