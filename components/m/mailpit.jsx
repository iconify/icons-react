import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olgn96bqv.css';
import '../../css/j/jse14viep.css';

const viewBox = {"width":132.292,"height":121.708};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olgn96bqv"/><path class="jse14viep"/>`,
		"fallback": "thesvg-color:mailpit",
	});
}

export default Component;
