import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s444h146f.css';
import '../../css/b/bvdosh-aj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s444h146f"/><path class="bvdosh-aj"/></g>`,
		"fallback": "fluent-emoji-flat:straight-ruler",
	});
}

export default Component;
