import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvyj2k6nd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvyj2k6nd"/>`,
		"fallback": "f7:placemark",
	});
}

export default Component;
