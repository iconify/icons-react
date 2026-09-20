import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udfoosbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="udfoosbol"/>`,
		"fallback": "streamline-sharp:mirror-horizontally-remix",
	});
}

export default Component;
