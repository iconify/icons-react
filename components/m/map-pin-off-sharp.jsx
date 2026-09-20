import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru860kb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru860kb-j"/>`,
		"fallback": "keyline-icons:map-pin-off-sharp",
	});
}

export default Component;
