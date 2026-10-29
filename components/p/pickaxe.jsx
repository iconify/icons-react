import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tvlzmkwfy.css';
import '../../css/p/p93okda0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tvlzmkwfy wm-k"/><path class="p93okda0o wm-a"/></g>`,
		"fallback": "withicons-bauhaus:pickaxe",
	});
}

export default Component;
