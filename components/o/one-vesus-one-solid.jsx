import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny29n5mmj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ny29n5mmj"/>`,
		"fallback": "streamline:one-vesus-one-solid",
	});
}

export default Component;
