import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr3v60brl.css';
import '../../css/v/v1qktebkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr3v60brl"/><path clip-rule="evenodd" class="v1qktebkd"/>`,
		"fallback": "basil:picture-outline",
	});
}

export default Component;
