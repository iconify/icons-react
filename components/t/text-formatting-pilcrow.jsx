import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh7i6gbmn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh7i6gbmn"/>`,
		"fallback": "streamline-block:text-formatting-pilcrow",
	});
}

export default Component;
