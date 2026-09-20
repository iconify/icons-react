import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7oqmmyvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s7oqmmyvp"/>`,
		"fallback": "streamline-sharp:search-history-browser-solid",
	});
}

export default Component;
