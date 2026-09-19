import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e180fybug.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e180fybug"/>`,
		"fallback": "carbon:metadata-definition-semantic",
	});
}

export default Component;
