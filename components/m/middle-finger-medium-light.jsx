import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igfnghb0i.css';
import '../../css/v/vtv9p8bvk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="igfnghb0i"/><path class="vtv9p8bvk"/></g>`,
		"fallback": "fluent-emoji-flat:middle-finger-medium-light",
	});
}

export default Component;
