import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja39s95eo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja39s95eo"/>`,
		"fallback": "subway:upload-2",
	});
}

export default Component;
