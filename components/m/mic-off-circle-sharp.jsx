import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yihaffb1f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yihaffb1f"/>`,
		"fallback": "ion:mic-off-circle-sharp",
	});
}

export default Component;
