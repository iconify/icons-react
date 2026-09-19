import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b7n8wdbqe.css';
import '../../css/x/x6gh-tbkk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b7n8wdbqe"/><path class="x6gh-tbkk"/></g>`,
		"fallback": "fluent-emoji-flat:raised-fist",
	});
}

export default Component;
