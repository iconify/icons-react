import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hdftlebhb.css';
import '../../css/o/o_i4znb3n.css';
import '../../css/p/pfunrccay.css';
import '../../css/k/kfb2hf1uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hdftlebhb wm-k"/><path class="o_i4znb3n wm-shadow"/><path class="pfunrccay wm-k"/><path class="kfb2hf1uo wm-a"/></g>`,
		"fallback": "withicons:water-balloon-engrave",
	});
}

export default Component;
