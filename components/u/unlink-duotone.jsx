import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tetnah5za.css';
import '../../css/a/av68ewb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tetnah5za"/><path class="av68ewb9k"/></g>`,
		"fallback": "keyline-icons:unlink-duotone",
	});
}

export default Component;
