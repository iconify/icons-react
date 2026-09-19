import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olvp4pb6g.css';
import '../../css/v/vow5vr4ln.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="olvp4pb6g"/><path class="vow5vr4ln"/></g>`,
		"fallback": "fluent-emoji-flat:left-facing-fist-light",
	});
}

export default Component;
