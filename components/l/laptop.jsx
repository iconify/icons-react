import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui3celb2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui3celb2q"/>`,
		"fallback": "cil:laptop",
	});
}

export default Component;
