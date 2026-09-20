import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdfs5ecrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tdfs5ecrs"/>`,
		"fallback": "streamline-sharp:new-file-remix",
	});
}

export default Component;
