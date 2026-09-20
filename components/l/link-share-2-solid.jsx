import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffr4accln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffr4accln"/>`,
		"fallback": "streamline-sharp:link-share-2-solid",
	});
}

export default Component;
