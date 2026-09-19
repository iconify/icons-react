import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uea3lmbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uea3lmbvg"/>`,
		"fallback": "akar-icons:ribbon",
	});
}

export default Component;
