import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rldd44biu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rldd44biu"/>`,
		"fallback": "streamline:smiley-grumpy-remix",
	});
}

export default Component;
