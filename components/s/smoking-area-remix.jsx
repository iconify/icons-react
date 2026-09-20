import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agm10xb6t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="agm10xb6t"/>`,
		"fallback": "streamline-flex:smoking-area-remix",
	});
}

export default Component;
