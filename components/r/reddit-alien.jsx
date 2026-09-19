import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0dsgpb_o.css';

const viewBox = {"width":1792,"height":1696};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0dsgpb_o"/>`,
		"fallback": "fa:reddit-alien",
	});
}

export default Component;
