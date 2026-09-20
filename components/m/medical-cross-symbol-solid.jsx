import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap9ynib2t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ap9ynib2t"/>`,
		"fallback": "streamline:medical-cross-symbol-solid",
	});
}

export default Component;
