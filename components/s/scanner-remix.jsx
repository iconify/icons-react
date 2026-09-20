import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn-z210wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yn-z210wd"/>`,
		"fallback": "streamline-sharp:scanner-remix",
	});
}

export default Component;
