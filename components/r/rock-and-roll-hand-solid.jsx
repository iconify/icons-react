import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z79ut5b1f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z79ut5b1f"/>`,
		"fallback": "streamline:rock-and-roll-hand-solid",
	});
}

export default Component;
