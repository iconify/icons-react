import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t59wq0bcq.css';
import '../../css/e/e71w-2bnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t59wq0bcq"/><path class="e71w-2bnu"/>`,
		"fallback": "boxicons:picture-in-picture-close",
	});
}

export default Component;
