import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz2h6vkvf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cz2h6vkvf"/>`,
		"fallback": "streamline:volume-mute-remix",
	});
}

export default Component;
