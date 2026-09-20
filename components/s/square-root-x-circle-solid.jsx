import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-w-62byc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v-w-62byc"/>`,
		"fallback": "streamline:square-root-x-circle-solid",
	});
}

export default Component;
