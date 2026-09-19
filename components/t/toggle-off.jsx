import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0le-aczg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0le-aczg"/>`,
		"fallback": "bi:toggle-off",
	});
}

export default Component;
