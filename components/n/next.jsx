import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4ggub3vm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4ggub3vm"/>`,
		"fallback": "streamline:next",
	});
}

export default Component;
