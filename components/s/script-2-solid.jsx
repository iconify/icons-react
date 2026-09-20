import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6o72bcuo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z6o72bcuo"/>`,
		"fallback": "streamline:script-2-solid",
	});
}

export default Component;
