import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6v10ib0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6v10ib0a"/>`,
		"fallback": "keyline-icons:variable-sharp",
	});
}

export default Component;
