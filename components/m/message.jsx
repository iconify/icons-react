import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfj4xhnmo.css';
import '../../css/f/f2-nhmb4x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfj4xhnmo"/><path class="f2-nhmb4x"/>`,
		"fallback": "ep:message",
	});
}

export default Component;
