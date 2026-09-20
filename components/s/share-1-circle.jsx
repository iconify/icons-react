import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f25raz9at.css';
import '../../css/h/h67twkbcr.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f25raz9at"/><path class="h67twkbcr"/>`,
		"fallback": "lineicons:share-1-circle",
	});
}

export default Component;
