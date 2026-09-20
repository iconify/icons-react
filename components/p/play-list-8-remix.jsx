import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icn85e4wq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="icn85e4wq"/>`,
		"fallback": "streamline-sharp:play-list-8-remix",
	});
}

export default Component;
