import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dm3rg-70a.css';
import '../../css/q/q30sc9yab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dm3rg-70a"/><path class="q30sc9yab"/></g>`,
		"fallback": "withicons-retro:person-standing",
	});
}

export default Component;
