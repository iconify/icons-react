import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj879bbkl.css';

const viewBox = {"width":576,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj879bbkl"/>`,
		"fallback": "whh:mobile",
	});
}

export default Component;
