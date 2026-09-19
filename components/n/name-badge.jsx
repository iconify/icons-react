import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rghu7sg6w.css';
import '../../css/b/b4gh1wqcx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rghu7sg6w"/><path class="b4gh1wqcx"/></g>`,
		"fallback": "fluent-emoji-flat:name-badge",
	});
}

export default Component;
