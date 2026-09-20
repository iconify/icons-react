import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubp6vsclr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ubp6vsclr"/>`,
		"fallback": "streamline-sharp:line-arrow-synchronize-disable-remix",
	});
}

export default Component;
