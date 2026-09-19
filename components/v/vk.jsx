import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8fafzncn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8fafzncn"/>`,
		"fallback": "icomoon-free:vk",
	});
}

export default Component;
