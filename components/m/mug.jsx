import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrr7wkbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrr7wkbix"/>`,
		"fallback": "tabler:mug",
	});
}

export default Component;
