import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wvq8chrbx.css';
import '../../css/d/df8z9fbun.css';
import '../../css/w/wg32sp1ln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k wvq8chrbx"/><path class="df8z9fbun wm-a"/><path class="wg32sp1ln"/></g>`,
		"fallback": "withicons-bauhaus:list-todo",
	});
}

export default Component;
