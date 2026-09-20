import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shvkgobsq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shvkgobsq"/>`,
		"fallback": "streamline-flex:user-collaborate-group",
	});
}

export default Component;
