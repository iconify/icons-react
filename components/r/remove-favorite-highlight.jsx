import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh45k69ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh45k69ub"/>`,
		"fallback": "streamline-sharp:remove-favorite-highlight",
	});
}

export default Component;
