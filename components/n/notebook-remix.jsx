import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj1_5dhsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cj1_5dhsk"/>`,
		"fallback": "streamline-sharp:notebook-remix",
	});
}

export default Component;
