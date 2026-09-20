import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l25s7qq7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l25s7qq7d"/>`,
		"fallback": "reicon:undo-circle-square-filled",
	});
}

export default Component;
