import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhgzc94rg.css';
import '../../css/n/nr1pzgbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhgzc94rg"/><path clip-rule="evenodd" class="nr1pzgbdt"/>`,
		"fallback": "solar:walking-round-bold",
	});
}

export default Component;
