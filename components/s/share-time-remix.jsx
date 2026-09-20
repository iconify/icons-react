import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly7o7ggfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ly7o7ggfz"/>`,
		"fallback": "streamline-sharp:share-time-remix",
	});
}

export default Component;
