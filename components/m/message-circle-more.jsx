import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t222qp1dw.css';
import '../../css/t/tpohchbcz.css';
import '../../css/m/mq6pl43bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t222qp1dw wm-k"/><path class="tpohchbcz wm-a"/><path class="mq6pl43bl wm-a"/>`,
		"fallback": "withicons-bauhaus:message-circle-more",
	});
}

export default Component;
