import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh_25h19d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh_25h19d"/>`,
		"fallback": "streamline-block:other-ui-pen-tool",
	});
}

export default Component;
