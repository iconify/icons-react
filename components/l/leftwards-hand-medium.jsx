import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b7m6wiblj.css';
import '../../css/v/vi0jwqp_n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b7m6wiblj"/><path clip-rule="evenodd" class="vi0jwqp_n"/></g>`,
		"fallback": "fluent-emoji-flat:leftwards-hand-medium",
	});
}

export default Component;
