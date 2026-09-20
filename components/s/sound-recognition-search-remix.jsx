import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5t6nbb6z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b5t6nbb6z"/>`,
		"fallback": "streamline-flex:sound-recognition-search-remix",
	});
}

export default Component;
