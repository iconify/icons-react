import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mbnsw0b8c.css';
import '../../css/f/fq798ybdh.css';
import '../../css/j/jg62-fcal.css';
import '../../css/v/vlqs_8lvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mbnsw0b8c"/><path class="fq798ybdh"/><path class="jg62-fcal"/><path class="vlqs_8lvx"/></g>`,
		"fallback": "keyline-icons:terminal-sparkles-two-tone",
	});
}

export default Component;
