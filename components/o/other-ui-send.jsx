import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juf74mb5i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juf74mb5i"/>`,
		"fallback": "streamline-block:other-ui-send",
	});
}

export default Component;
