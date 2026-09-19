import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/y/ygbplvbei.css';
import '../../css/c/cplpj-rbo.css';
import '../../css/u/uxhzhrb1u.css';
import '../../css/h/hi65sfm0x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ygbplvbei"/><circle class="cplpj-rbo"/><path class="uxhzhrb1u"/><path class="hi65sfm0x"/></g>`,
		"fallback": "icon-park:microphone-one",
	});
}

export default Component;
