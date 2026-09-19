import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh6vtxr6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vh6vtxr6d"/>`,
		"fallback": "iconoir:phone-paused-solid",
	});
}

export default Component;
