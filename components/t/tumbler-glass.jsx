import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkzxgjbxv.css';
import '../../css/s/s8icty3sx.css';
import '../../css/x/x764eiwbe.css';
import '../../css/v/vgwhqfvxp.css';
import '../../css/b/b4ofd3okp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wkzxgjbxv"/><path class="s8icty3sx"/><path class="x764eiwbe"/><path class="vgwhqfvxp"/><path class="b4ofd3okp"/></g>`,
		"fallback": "fluent-emoji-flat:tumbler-glass",
	});
}

export default Component;
