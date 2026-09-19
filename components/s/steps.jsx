import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xih7reb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xih7reb6d"/>`,
		"fallback": "griddy-icons:steps",
	});
}

export default Component;
