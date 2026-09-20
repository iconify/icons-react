import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ic-zycx7t.css';
import '../../css/z/ztsnvwd_n.css';
import '../../css/z/z9i4rfbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ic-zycx7t"/><path class="ztsnvwd_n"/><path class="z9i4rfbjq"/></g>`,
		"fallback": "keyline-icons:tablet-vertical-two-tone",
	});
}

export default Component;
