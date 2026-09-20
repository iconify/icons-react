import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tupo72bxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tupo72bxc"/>`,
		"fallback": "streamline-sharp:select-circle-area-1-remix",
	});
}

export default Component;
