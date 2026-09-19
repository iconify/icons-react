import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v15o35bms.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v15o35bms"/>`,
		"fallback": "fa:share-alt-square",
	});
}

export default Component;
