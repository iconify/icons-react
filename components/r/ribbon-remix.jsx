import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxu6-3n6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vxu6-3n6u"/>`,
		"fallback": "streamline-sharp:ribbon-remix",
	});
}

export default Component;
