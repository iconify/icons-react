import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo5-5tayx.css';
import '../../css/a/ars70-b2s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo5-5tayx"/><path clip-rule="evenodd" class="ars70-b2s"/>`,
		"fallback": "streamline-block:other-ui-award",
	});
}

export default Component;
