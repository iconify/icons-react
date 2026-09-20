import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0ctrg0qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m0ctrg0qy"/>`,
		"fallback": "streamline-sharp:move-file-remix",
	});
}

export default Component;
