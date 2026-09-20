import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui3x2lbwj.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui3x2lbwj"/>`,
		"fallback": "lineicons:stop",
	});
}

export default Component;
