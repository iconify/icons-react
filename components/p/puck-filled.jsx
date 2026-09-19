import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1vnqtbdy.css';
import '../../css/j/jdmutcjtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1vnqtbdy"/><path class="jdmutcjtc"/>`,
		"fallback": "boxicons:puck-filled",
	});
}

export default Component;
