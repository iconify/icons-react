import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9irpyjfv.css';
import '../../css/a/a-5p04cix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9irpyjfv"/><path class="a-5p04cix"/>`,
		"fallback": "ion:mic",
	});
}

export default Component;
