import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xews0pbhm.css';
import '../../css/x/xmnz2droq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xews0pbhm"/><path class="xmnz2droq"/></g>`,
		"fallback": "fluent-emoji-flat:speech-balloon",
	});
}

export default Component;
