import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rkjcwx_jh.css';
import '../../css/u/u79cqsbvr.css';
import '../../css/k/k3efc-b7f.css';
import '../../css/f/fjxwk9bjb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rkjcwx_jh"/><path class="u79cqsbvr"/><path class="k3efc-b7f"/><path class="fjxwk9bjb"/></g>`,
		"fallback": "fluent-emoji-flat:water-wave",
	});
}

export default Component;
