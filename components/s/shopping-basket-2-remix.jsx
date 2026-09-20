import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myfhr4uxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="myfhr4uxi"/>`,
		"fallback": "streamline-sharp:shopping-basket-2-remix",
	});
}

export default Component;
