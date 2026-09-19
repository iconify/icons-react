import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps7l495qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ps7l495qt"/>`,
		"fallback": "basil:phone-outline",
	});
}

export default Component;
