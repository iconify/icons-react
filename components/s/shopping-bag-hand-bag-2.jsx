import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0yvpuh5f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0yvpuh5f"/>`,
		"fallback": "streamline:shopping-bag-hand-bag-2",
	});
}

export default Component;
