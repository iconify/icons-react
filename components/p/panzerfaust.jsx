import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eofb2ccfy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eofb2ccfy"/>`,
		"fallback": "game-icons:panzerfaust",
	});
}

export default Component;
