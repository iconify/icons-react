import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd5xcgt6v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pd5xcgt6v"/>`,
		"fallback": "pajamas:log",
	});
}

export default Component;
