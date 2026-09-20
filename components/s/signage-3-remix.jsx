import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uduzp3v7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uduzp3v7g"/>`,
		"fallback": "streamline-sharp:signage-3-remix",
	});
}

export default Component;
