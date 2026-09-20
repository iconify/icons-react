import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndmdu-bty.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ndmdu-bty"/>`,
		"fallback": "pajamas:stop",
	});
}

export default Component;
