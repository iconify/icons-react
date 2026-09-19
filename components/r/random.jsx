import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeswnpbro.css';

const viewBox = {"width":520,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeswnpbro"/>`,
		"fallback": "ps:random",
	});
}

export default Component;
