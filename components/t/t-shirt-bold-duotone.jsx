import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh0fupbic.css';
import '../../css/u/u9p7tmx1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lh0fupbic"/><path class="u9p7tmx1f"/>`,
		"fallback": "solar:t-shirt-bold-duotone",
	});
}

export default Component;
