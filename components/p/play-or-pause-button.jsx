import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v73zvf-5s.css';
import '../../css/f/fwet0iuhu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="v73zvf-5s"/><path class="fwet0iuhu"/></g>`,
		"fallback": "fluent-emoji-flat:play-or-pause-button",
	});
}

export default Component;
