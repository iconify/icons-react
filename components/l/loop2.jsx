import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3n1iwbud.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3n1iwbud"/>`,
		"fallback": "icomoon-free:loop2",
	});
}

export default Component;
