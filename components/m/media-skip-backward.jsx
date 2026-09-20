import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo8r5ubdl.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo8r5ubdl"/>`,
		"fallback": "oi:media-skip-backward",
	});
}

export default Component;
