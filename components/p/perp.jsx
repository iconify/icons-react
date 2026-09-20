import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds7fe3bxn.css';
import '../../css/s/svj3x-59u.css';
import '../../css/p/p5evhgbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ds7fe3bxn"/><path clip-rule="evenodd" class="svj3x-59u"/><path class="p5evhgbgk"/>`,
		"fallback": "token:perp",
	});
}

export default Component;
