import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1rzkm0gx.css';
import '../../css/r/rwic42bjm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/umggkyb4f.css';
import '../../css/y/y9utjgprl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1rzkm0gx"/><path class="rwic42bjm"/><g class="jn8qy4bru"><path class="umggkyb4f"/><path class="y9utjgprl"/></g>`,
		"fallback": "openmoji:mount-fuji",
	});
}

export default Component;
