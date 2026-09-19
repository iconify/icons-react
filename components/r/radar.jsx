import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbsibt3cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbsibt3cj"/>`,
		"fallback": "griddy-icons:radar",
	});
}

export default Component;
