import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gnci-5bia.css';
import '../../css/y/yc6f2ibtn.css';
import '../../css/s/swrq_pkri.css';
import '../../css/k/k8lhefb8t.css';
import '../../css/i/iosp0x2su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gnci-5bia"/><path class="wm-k yc6f2ibtn"/><path class="swrq_pkri wm-a"/><path class="k8lhefb8t wm-k"/><path class="iosp0x2su wm-a"/></g>`,
		"fallback": "withicons:scroll-text-sketch",
	});
}

export default Component;
