import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy6_ilbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xy6_ilbhh"/>`,
		"fallback": "token:mean",
	});
}

export default Component;
