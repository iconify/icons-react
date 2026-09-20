import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isa9d5b5k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="isa9d5b5k"/>`,
		"fallback": "streamline:play-list-4-solid",
	});
}

export default Component;
