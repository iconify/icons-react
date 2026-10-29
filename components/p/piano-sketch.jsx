import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r-bsq-m3v.css';
import '../../css/k/kqraa7qvj.css';
import '../../css/r/r0m-rx3lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r-bsq-m3v wm-k"/><path class="kqraa7qvj wm-k"/><path class="r0m-rx3lk wm-a"/></g>`,
		"fallback": "withicons:piano-sketch",
	});
}

export default Component;
