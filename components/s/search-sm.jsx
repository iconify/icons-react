import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia_fg_bav.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ia_fg_bav"/>`,
		"fallback": "pajamas:search-sm",
	});
}

export default Component;
