import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqu14h6hf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zqu14h6hf"/>`,
		"fallback": "streamline:pacman-solid",
	});
}

export default Component;
