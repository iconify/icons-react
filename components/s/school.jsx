import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfxaipb-q.css';
import '../../css/e/ez6lwcbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfxaipb-q"/><path class="ez6lwcbzz"/>`,
		"fallback": "bxs:school",
	});
}

export default Component;
