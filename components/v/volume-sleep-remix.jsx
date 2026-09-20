import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_0fwj9ny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d_0fwj9ny"/>`,
		"fallback": "streamline-sharp:volume-sleep-remix",
	});
}

export default Component;
