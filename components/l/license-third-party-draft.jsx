import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy-hsnmqc.css';
import '../../css/f/f1ijkjbnr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy-hsnmqc"/><path class="f1ijkjbnr"/>`,
		"fallback": "carbon:license-third-party-draft",
	});
}

export default Component;
