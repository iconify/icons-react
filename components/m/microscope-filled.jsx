import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy-gc10hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sy-gc10hb"/>`,
		"fallback": "griddy-icons:microscope-filled",
	});
}

export default Component;
