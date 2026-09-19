import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpl_zydug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rpl_zydug"/>`,
		"fallback": "griddy-icons:server-alt-filled",
	});
}

export default Component;
