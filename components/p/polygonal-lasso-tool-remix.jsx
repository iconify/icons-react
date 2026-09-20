import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9e7yrhci.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q9e7yrhci"/>`,
		"fallback": "streamline-flex:polygonal-lasso-tool-remix",
	});
}

export default Component;
