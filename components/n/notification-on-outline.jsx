import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekmwabpqj.css';
import '../../css/p/pg8vlgzhf.css';
import '../../css/e/ehqo78bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekmwabpqj"/><path clip-rule="evenodd" class="pg8vlgzhf"/><path class="ehqo78bzj"/>`,
		"fallback": "basil:notification-on-outline",
	});
}

export default Component;
