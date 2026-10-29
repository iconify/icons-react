import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hd-prbc5x.css';
import '../../css/r/r9mzzgbcj.css';
import '../../css/y/ymcuixbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hd-prbc5x"/><path class="r9mzzgbcj wm-a"/><path class="wm-s ymcuixbps"/></g>`,
		"fallback": "withicons:plug-zap-solid",
	});
}

export default Component;
