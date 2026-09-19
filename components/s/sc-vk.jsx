import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7gvf4b-z.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t7gvf4b-z"/>`,
		"fallback": "ei:sc-vk",
	});
}

export default Component;
