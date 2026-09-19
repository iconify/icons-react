import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aelgwpb0w.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aelgwpb0w"/>`,
		"fallback": "f7:photo-on-rectangle",
	});
}

export default Component;
