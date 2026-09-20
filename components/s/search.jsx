import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzeka9dub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mzeka9dub"/>`,
		"fallback": "majesticons:search",
	});
}

export default Component;
