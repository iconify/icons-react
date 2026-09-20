import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjixjmliq.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/slyvoxbel.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGZ3M9fe9k" class="bjixjmliq"/></defs><g class="cuyn6tgcc"><path clip-rule="evenodd" class="slyvoxbel"/><use href="#SVGZ3M9fe9k" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGZ3M9fe9k"/></g>`,
		"fallback": "reicon:server-cloud-filled",
	});
}

export default Component;
