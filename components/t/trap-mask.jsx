import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfmq1ggwn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfmq1ggwn"/>`,
		"fallback": "game-icons:trap-mask",
	});
}

export default Component;
