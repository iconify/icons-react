import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px2yaabvk.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px2yaabvk"/>`,
		"fallback": "fa:question-circle-o",
	});
}

export default Component;
