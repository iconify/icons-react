import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbdvy7bke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hbdvy7bke"/>`,
		"fallback": "streamline-sharp:target-3-solid",
	});
}

export default Component;
