import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dei_17bxy.css';
import '../../css/h/ht7052bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dei_17bxy"/><path class="ht7052bix"/>`,
		"fallback": "stash:outbox",
	});
}

export default Component;
