import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ld5ucbc0q.css';
import '../../css/v/ve8dolbrm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ld5ucbc0q"/><path class="ve8dolbrm"/></g>`,
		"fallback": "fluent-emoji-flat:sheaf-of-rice",
	});
}

export default Component;
