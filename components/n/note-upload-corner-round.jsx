import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy6azchko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy6azchko"/>`,
		"fallback": "coolicons:note-upload-corner-round",
	});
}

export default Component;
