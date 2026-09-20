import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvdrh2bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zvdrh2bok"/>`,
		"fallback": "streamline-sharp:recycle-1-remix",
	});
}

export default Component;
