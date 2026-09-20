import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc4n_nfpp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wc4n_nfpp"/>`,
		"fallback": "pajamas:level-up",
	});
}

export default Component;
