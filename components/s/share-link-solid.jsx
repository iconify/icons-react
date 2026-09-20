import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc6ozldmj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gc6ozldmj"/>`,
		"fallback": "streamline:share-link-solid",
	});
}

export default Component;
