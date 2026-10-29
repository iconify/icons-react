import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s1l5a3baz.css';
import '../../css/a/af6vrvbxh.css';
import '../../css/f/f9cq2cc0w.css';
import '../../css/s/skq-4gbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="s1l5a3baz"/><path class="af6vrvbxh"/><path class="f9cq2cc0w"/><path class="skq-4gbyv"/></g>`,
		"fallback": "withicons-bauhaus:martini",
	});
}

export default Component;
