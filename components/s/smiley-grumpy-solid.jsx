import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfhmv8brl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lfhmv8brl"/>`,
		"fallback": "streamline:smiley-grumpy-solid",
	});
}

export default Component;
