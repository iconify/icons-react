import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8uz9rbrg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c8uz9rbrg"/>`,
		"fallback": "streamline:pharmacy-solid",
	});
}

export default Component;
