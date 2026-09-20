import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awij058mj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="awij058mj"/>`,
		"fallback": "streamline-flex:landscape-lock-solid",
	});
}

export default Component;
