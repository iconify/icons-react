import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyo2u0bgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyo2u0bgt"/>`,
		"fallback": "streamline-sharp:recycle-1",
	});
}

export default Component;
