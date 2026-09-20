import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blwu7db1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blwu7db1t"/>`,
		"fallback": "tabler:seo",
	});
}

export default Component;
