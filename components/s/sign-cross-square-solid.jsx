import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bup17yboj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bup17yboj"/>`,
		"fallback": "streamline:sign-cross-square-solid",
	});
}

export default Component;
