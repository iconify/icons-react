import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tutwf7z4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tutwf7z4z"/>`,
		"fallback": "ion:md-infinite",
	});
}

export default Component;
