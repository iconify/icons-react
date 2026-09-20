import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ezd6lzbxv.css';
import '../../css/b/b5bf5sbnp.css';
import '../../css/h/hs6tp-s_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ezd6lzbxv"/><path class="b5bf5sbnp"/><path class="hs6tp-s_w"/></g>`,
		"fallback": "keyline-icons:volume-off-two-tone",
	});
}

export default Component;
