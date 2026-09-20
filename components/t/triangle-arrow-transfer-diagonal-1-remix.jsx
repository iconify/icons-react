import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrkadbbwo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rrkadbbwo"/>`,
		"fallback": "streamline:triangle-arrow-transfer-diagonal-1-remix",
	});
}

export default Component;
