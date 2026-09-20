import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daui_jbia.css';
import '../../css/f/f7gi_3bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daui_jbia"/><path class="f7gi_3bba"/>`,
		"fallback": "stash:list-ul",
	});
}

export default Component;
