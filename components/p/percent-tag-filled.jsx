import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niv9iacmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="niv9iacmc"/>`,
		"fallback": "reicon:percent-tag-filled",
	});
}

export default Component;
