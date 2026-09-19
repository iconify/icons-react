import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9yjhno0t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9yjhno0t"/>`,
		"fallback": "carbon:swimlane-d-vertical",
	});
}

export default Component;
