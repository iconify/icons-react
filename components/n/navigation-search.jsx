import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8z78hb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8z78hb8j"/>`,
		"fallback": "tabler:navigation-search",
	});
}

export default Component;
