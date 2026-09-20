import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkc7o9b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hkc7o9b-e"/>`,
		"fallback": "reicon:square-arrows-left",
	});
}

export default Component;
