import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8o82ubyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z8o82ubyu"/>`,
		"fallback": "streamline-sharp:justice-scale-2-remix",
	});
}

export default Component;
