import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dutawjbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dutawjbev"/>`,
		"fallback": "streamline-sharp:share-code-solid",
	});
}

export default Component;
