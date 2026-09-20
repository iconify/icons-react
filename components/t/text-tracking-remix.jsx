import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr1fmvf1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wr1fmvf1y"/>`,
		"fallback": "streamline-sharp:text-tracking-remix",
	});
}

export default Component;
