import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uu-za-tly.css';
import '../../css/t/t1vc-_v9v.css';
import '../../css/d/drswhsb9m.css';
import '../../css/q/q1vr80fzk.css';
import '../../css/g/gsm21sbrt.css';
import '../../css/n/nb-vlvbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uu-za-tly wm-k"/><path class="t1vc-_v9v wm-a"/><path class="drswhsb9m wm-shadow"/><path class="q1vr80fzk wm-k"/><path class="gsm21sbrt wm-a"/><path class="nb-vlvbbc wm-k"/></g>`,
		"fallback": "withicons:taxi-engrave",
	});
}

export default Component;
