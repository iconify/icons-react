import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dak6y7b8m.css';
import '../../css/z/zjptowt2p.css';
import '../../css/r/rtotpcckl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dak6y7b8m"/><path clip-rule="evenodd" class="zjptowt2p"/><path clip-rule="evenodd" class="rtotpcckl"/>`,
		"fallback": "stash:qr-code-duotone",
	});
}

export default Component;
