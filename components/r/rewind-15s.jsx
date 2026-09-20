import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6c0kwmfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e6c0kwmfo"/>`,
		"fallback": "reicon:rewind-15s",
	});
}

export default Component;
