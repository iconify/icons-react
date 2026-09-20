import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuiwu0b0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nuiwu0b0y"/>`,
		"fallback": "streamline-sharp:sizing-remix",
	});
}

export default Component;
