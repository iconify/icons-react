import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw77ssi0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uw77ssi0a"/>`,
		"fallback": "reicon:square-arrow-right-up-filled",
	});
}

export default Component;
