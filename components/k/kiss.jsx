import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcnyvnbpb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcnyvnbpb"/>`,
		"fallback": "fa7-regular:kiss",
	});
}

export default Component;
