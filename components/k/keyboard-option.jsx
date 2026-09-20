import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8hgfh8lo.css';
import '../../css/a/a6zy-8bqo.css';
import '../../css/e/ed5ti7b7r.css';
import '../../css/t/tzi9o_b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8hgfh8lo"/><path class="a6zy-8bqo"/><path class="ed5ti7b7r"/><path class="tzi9o_b0o"/></g>`,
		"fallback": "streamline-ultimate-color:keyboard-option",
	});
}

export default Component;
