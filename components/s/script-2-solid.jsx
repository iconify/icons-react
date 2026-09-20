import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfcsk6m0t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vfcsk6m0t"/>`,
		"fallback": "streamline-flex:script-2-solid",
	});
}

export default Component;
