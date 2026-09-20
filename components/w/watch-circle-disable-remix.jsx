import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4492wb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u4492wb0w"/>`,
		"fallback": "streamline-sharp:watch-circle-disable-remix",
	});
}

export default Component;
