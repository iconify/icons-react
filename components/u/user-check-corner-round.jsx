import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r986gcbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r986gcbmk"/>`,
		"fallback": "coolicons:user-check-corner-round",
	});
}

export default Component;
