import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkl2dnbfh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vkl2dnbfh"/>`,
		"fallback": "pajamas:live-stream",
	});
}

export default Component;
