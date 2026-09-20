import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc9mvj8qh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc9mvj8qh"/>`,
		"fallback": "ix:upload-fail",
	});
}

export default Component;
