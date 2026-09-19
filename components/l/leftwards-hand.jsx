import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bj34bub5i.css';
import '../../css/f/fvv31zbbo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bj34bub5i"/><path clip-rule="evenodd" class="fvv31zbbo"/></g>`,
		"fallback": "fluent-emoji-flat:leftwards-hand",
	});
}

export default Component;
