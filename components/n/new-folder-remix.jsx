import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3d0_1qju.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i3d0_1qju"/>`,
		"fallback": "streamline-flex:new-folder-remix",
	});
}

export default Component;
