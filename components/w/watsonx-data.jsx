import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6bc1hbel.css';
import '../../css/d/d8vaue9uw.css';
import '../../css/d/dtcgrhbxr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6bc1hbel"/><path class="d8vaue9uw"/><path class="dtcgrhbxr"/>`,
		"fallback": "carbon:watsonx-data",
	});
}

export default Component;
