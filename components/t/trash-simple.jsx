import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q54x8h4qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q54x8h4qo"/>`,
		"fallback": "iconamoon:trash-simple",
	});
}

export default Component;
