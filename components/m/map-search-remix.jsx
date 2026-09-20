import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cff26lznd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cff26lznd"/>`,
		"fallback": "streamline-sharp:map-search-remix",
	});
}

export default Component;
