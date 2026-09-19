import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adzt5lq3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="adzt5lq3m"/>`,
		"fallback": "griddy-icons:stamp-filled",
	});
}

export default Component;
