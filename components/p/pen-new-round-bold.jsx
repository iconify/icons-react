import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enn3tn4xs.css';
import '../../css/w/w-oye57eg.css';
import '../../css/b/b3izabcyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enn3tn4xs"/><path class="w-oye57eg"/><path class="b3izabcyh"/>`,
		"fallback": "solar:pen-new-round-bold",
	});
}

export default Component;
