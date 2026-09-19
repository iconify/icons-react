import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpiv9dj0x.css';
import '../../css/m/mldtnhb8i.css';
import '../../css/v/v84njyepy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gpiv9dj0x"/><path class="mldtnhb8i"/><path class="v84njyepy"/></g>`,
		"fallback": "fluent-emoji-flat:magnifying-glass-tilted-right",
	});
}

export default Component;
