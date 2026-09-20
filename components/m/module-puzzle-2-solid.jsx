import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn18cu8da.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cn18cu8da"/>`,
		"fallback": "streamline-flex:module-puzzle-2-solid",
	});
}

export default Component;
