import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m366bgznx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m366bgznx"/>`,
		"fallback": "reicon:paperclip6-filled",
	});
}

export default Component;
